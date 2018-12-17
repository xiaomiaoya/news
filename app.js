//导包
const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");

//配置
//实例化app
const app = express();
//统一处理自己的静态资源
app.use("/public" ,express.static("./public"));

//处理第三方静态资源
app.use("/node_modules", express.static("./node_modules"));

//配置模板引擎
app.engine('html', require('express-art-template'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());

//挂载路由
app.use(router);

//监听端口
app.listen(8000, () => {
    console.log('please run it ......');
})
