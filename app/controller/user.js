/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_serves\app\controller\user.js
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-16 19:24:12
 */
'use strict';
const Controller = require('egg').Controller;
class UserController extends Controller {
  async login() {
    const {
      ctx
    } = this;
    // type : 0 => student ， 1 => teacher , 2 => adminstrators
    const {
      username,
      password,
      loginType
    } = ctx.request.body
    try {
      ctx.validate({
        username: 'string',
        password: 'password',
        loginType: [0, 1, 2]
      })
    } catch (err) {
      return ctx.throw(403, '用户账号、密码或登录类型错误')
    }
    // 检验用户
    const result = await this.service.user.getUserByNameAndType(username, loginType)
    if (!result[0]) {
      return ctx.throw(403, '用户不存在')
    }
    const md5password = await ctx.service.utils.md5password(password);
    if (md5password == result[0].s_password) {
      // 生成 Token
      const TOKEN_LIVE_TIME = 6 * 60 * 60 * 1000 //一天
      const token = ctx.app.jwt.sign({
        username,
        loginType
      }, this.app.config.jwt.secret, {
        expiresIn: TOKEN_LIVE_TIME
      })
      ctx.body = {
        state: 200,
        msg: '登录成功',
        token: token
      }
      console.log(ctx.body);
    } else {
      return ctx.throw(403, '账号或密码错误')
    }
  }
}

module.exports = UserController;