/*
 * @Author: Post_Malone
 * @Description:
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_serves\config\config.default.js
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-11-01 21:40:16
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1664091035998_7771';

  // add your middleware config here
  config.middleware = [
    'errorHandler',
    'checkTokenHandle',
  ];

  // 错误处理
  config.errorHandler = {
    // 通用配置（以下是重点）
    enable: true, // 控制中间件是否开启。
    // '
    // match:'/user/list', // 设置只有符合某些规则的请求才会经过这个中间件（匹配路由）
    // ignore:'/shop' // 设置符合某些规则的请求不经过这个中间件。
  };

  config.checkTokenHandle = {
    // 通用配置（以下是重点）
    enable: true, // 控制中间件是否开启。
    // '
    // match:'/user/list', // 设置只有符合某些规则的请求才会经过这个中间件（匹配路由）
    ignore: ['/login','/home'], // 设置符合某些规则的请求不经过这个中间件。
  };
  // 跨域配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // 生成token配置
  config.jwt = {
    // enable:true,
    secret: 'abcdefghijklmn', // 自定义 token 的加密条件字符串
  };

  // 参数校验器配置，基于parameter
  config.validate = {
    convert: true, // 对参数可以使用 convertType 规则进行类型转换
    // validateRoot: false,   // 限制被验证值必须是一个对象。
    widelyUndefined: true,
  };
  // csrf 验证
  config.security = {
    csrf: {
      enable: false,
    },
  };
  exports.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '050900',
    database: 'project_demo1',
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
