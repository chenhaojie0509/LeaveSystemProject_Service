/*
 * @Author: Post_Malone
 * @Description:
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_serves\app\service\user.js
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-09-27 12:23:25
 */
'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async getUserByNameAndType(id, type) {
    const statements = [
      'select * from student where s_id = ?',
      'select * from teacher where t_id = ?',
      'select * from adminstrators where a_id = ?',
    ];

    const result = await this.app.mysql.query(statements[type], id);
    // console.log(result);
    return result;
  }
}

module.exports = UserService;
