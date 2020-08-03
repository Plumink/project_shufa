const express = require("express");
const mysql = require("mysql");
var app = express();
var bodyParser = require("body-parser"); //解析POST的body

app.use(bodyParser.json()); //使用body parser用于解析post的body
app.use(bodyParser.urlencoded({
  extended: true
})); //使用body parser用于解析post的body

//跨域解决
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Access-Token");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


app.use(express.static('public'));



//连接数据库
var db = mysql.createConnection({
  host: "134.175.157.69",
  port: "3306",
  user: "calligraphy_user",
  password: "Kzcd&11!7sc",
  database: "calligraphy"
});


//注册

// app.post("/register", function (req, res) {
//   console.log(req.body);
//   let Yes = {
//       success: true
//     },
//     No = {
//       success: false
//     }
//   db.query("insert into login(num_job,username,password) values(?,?,?)",
//     [req.body.jobNamber, req.body.username, req.body.password], (err, result) => {

//       if (err) {
//         console.log(err);
//         res.send(No)
//       } else {
//         res.send(Yes)
//       }
//     })
// })

//登陆
// var loginusernum = ''
// var loginusername = ''
app.post("/login", function (req, res) {
  let data = req.body;
  console.log(data.phone);
  console.log(data.password);
  let message1 = {
    success: true
  };
  let message2 = {
    success: false
  };
  db.query("select * from customer where cust_tel = '" + data.phone + "' and cust_pass = '" + data.password + "' ", function (err, result) {
    if (err) {
      throw err;
    } else {
      if (result == false) {
        res.send(message2);
      } else {
        res.send(message1);
      }
    }
  })
})

app.listen(8088);
