//导包
const express = require('express');
const c_user = require('./controllers/c_user');

//实例化router
const router = express.Router();

//监听端口
router.get("/signin", c_user.showSignin)
.post("/signin", c_user.handleSignin);

// signin
//导出包
module.exports = router;
