/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_serves\app\controller\menu.js
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-19 19:30:38
 */
'use strict';
const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');

class MenuController extends Controller {
  async getMenu() {
    const {
      ctx
    } = this;
    const {
      userType
    } = ctx.request.body
    console.log(userType);
    try {
      ctx.validate({
        userType: [0, 1, 2]
      })
    } catch (err) {
      return ctx.throw(403, '参数错误')
    }
    // 获取相应的菜单
    try {
      const {
        data
      } = await ctx.service.utils.getJsonData('../public/json/testDemo.json')
      console.log(data);
      ctx.body = data
    } catch (error) {
      ctx.throw()
    }



  }
}

module.exports = MenuController