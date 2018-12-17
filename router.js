//导包
const express = require('express');
const c_user = require('./controllers/c_user');

//实例化router
const router = express.Router();

//监听端口
router
    .post("/signin", c_user.showSignin)
    .get("/signin", c_user.handleSignin);

//导出包
module.exports = router;
