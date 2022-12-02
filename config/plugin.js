/*
 * @Author: Post_Malone
 * @Description:
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_serves\config\plugin.js
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-11-01 21:09:08
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mysql2: {
    enable: true,
    package: 'egg-mysql2',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  sequelize:{
    enable:true,
    package:'egg-sequelize'
  }
};
