const req = require("express/lib/request");
const mysql = require("mysql2")
const dbcon = require("./dbcon");
const moment = require("moment")

function login(req,res){
    console.log(req.body)
    res.send("ok")
    dbcon.execute("select * from userdb").then((result) => {
        console.log(result[0]);
    })
}
function markpresent(req,res){
    var roll = req.body.rollno
    dbcon.execute(`insert into studentdb select '${roll}','${req.body.name}','${req.body.date}','present' where not exists(select * from studentdb where roll = '${roll}' and cast(mdate as date) = '${moment(req.body.date).format("YYYY-MM-DD")}')`).then((result)=>{
        console.log(result[0].affectedRows);
        if (result[0].affectedRows == 0) {
            res.send(roll+" already marked")
        }else{
        res.send(roll+" marked present")}
    })

}
function markabsent(req,res){
    var roll = req.body.rollno
    dbcon.execute(`insert into studentdb select '${roll}','${req.body.name}','${req.body.date}','absent' where not exists(select * from studentdb where roll = '${roll}' and cast(mdate as date) = '${moment(req.body.date).format("YYYY-MM-DD")}')`).then((result)=>{
        if (result[0].affectedRows == 0) {
            res.send(roll+" already marked")
        }else{
        res.send(roll+" marked absent")}
    })

}
function getreport(req,res){
    var out = []
    dbcon.execute(`select roll,name,cast(mdate as date) as date,cast(mdate as time) as time,status from studentdb where cast(mdate as date) = '${req.body.date}'`).then((result)=>{
        result[0].forEach(element => {
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
