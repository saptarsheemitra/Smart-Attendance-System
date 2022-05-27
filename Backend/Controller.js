const req = require("express/lib/request");
const mysql = require("mysql2")
const dbcon = require("./dbcon").db;
const moment = require("moment")

function login(req,res){
    console.log(req.body)
    res.send("ok")
}
function markpresent(req,res){
    var roll = req.body.rollno
    dbcon.run(`insert into studentdb select '${roll}','${req.body.name}','${req.body.branch}','${req.body.date}','${req.body.time}','present' where not exists(select * from studentdb where roll = '${roll}' and mdate = '${moment(req.body.date).format("YYYY-MM-DD")}')`,(result,err)=>{
        console.log(result);
        if(err){
            res.send("error: "+err)
        }else{
            dbcon.all("select changes() as affectedrow",(err,row)=>{
                console.log(row[0].affectedrow);
                if (row[0].affectedrow == 0) {
                    res.send(roll+" already marked")
                }else{
                res.send(roll+" marked present")}
            })
        }
    })

}
function markabsent(req,res){
    var roll = req.body.rollno
    dbcon.run(`insert into studentdb select '${roll}','${req.body.name}','${req.body.branch}','${req.body.date}','${req.body.time}','absent' where not exists(select * from studentdb where roll = '${roll}' and mdate = '${moment(req.body.date).format("YYYY-MM-DD")}')`,(result,err)=>{
        console.log(result);
        if(err){
            res.send("error: "+err)
        }else{
            dbcon.all("select changes() as affectedrow",(err,row)=>{
                console.log(row[0].affectedrow);
                if (row[0].affectedrow == 0) {
                    res.send(roll+" already marked")
                }else{
                res.send(roll+" marked absent")}
            })
        }
    })

}
function getreport(req,res){
    var out = []
    console.log(req.query);
    dbcon.all(`select roll,branch,name,mdate as date,mtime as time,status from studentdb where mdate = '${req.query.date}'`,(err,rows)=>{
        rows.forEach(element => {
            element.date = moment(element.date).format("DD-MM-YYYY")
            out.push(element)
        });
        res.json(out);
    })
}
function getallreport(req,res){
    var out = []
    dbcon.all(`select roll,name,branch,mdate as date,mtime as time,status from studentdb`,(err,rows)=>{
        rows.forEach(element => {
            element.date = moment(element.date).format("DD-MM-YYYY")
            out.push(element)
        });
        res.json(out);
    })
}
exports.login = login;
exports.markpresent = markpresent
exports.markabsent = markabsent
exports.getdata = getreport
exports.getalldata = getallreport
