const M_user = require('../models/m_user');

//渲染登录页面
exports.showSignin = (req,res) =>{
    res.render('signin.html');
}

// 处理登录的请求
exports.handleSignin = (req, res) => {
    // 1. 获取表单数据
    const body = req.body;
    console.log(body);

    M_user.checkEmail = (body.email, (req, res) => {
        if (err) {
            throw err;
        }

        if (data.length === 0) {
            // console.log("邮箱不存在");
            return res.send({
                code: 1,
                msg: "邮箱不存在"
            });
        }
        // 3. 验证该邮箱对应数据的密码是否正确
        // 判断数据库的密码和body.password
        if (data[0].password != body.password) {
            return res.send({
                code: 2,
                msg: "密码错误"
            })
        }

        // 4. 返回200状态码
        res.send({
            code: 200,
            msg: "可以登录啦!!!好开心"
        })
    })



};