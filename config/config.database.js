/*
 * @Author: Post_Malone
 * @Description:
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_serves\config\config.database.js
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-09-25 15:33:10
 */
'use strict';

module.exports = {
  client: {
    // host
    host: 'localhost',
    // 端口号
    port: '3307',
    // 用户名
    user: 'root',
    // 密码
    password: '050900',
    // 数据库名
    database: 'project_demo1',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};
