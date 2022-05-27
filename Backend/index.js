const app = require("express")();
const router = require("./router");
const crypt = require("./cryptograph")

// app.use((req,res,err) =>{
//   console.log(req.url);
//   res.send("ok")
// })
app.use(require("express").json());
app.use("/mark", router);

app.use("/*",(req, res) => {
  res.send("404 Not Found");
  console.log(req.get('host'))
});
app.listen(80);
