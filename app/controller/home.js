/*
 * @Author: Post_Malone
 * @Description:
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_serves\app\controller\home.js
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-16 19:49:38
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
