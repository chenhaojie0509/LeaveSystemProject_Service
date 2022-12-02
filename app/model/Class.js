/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_serves\app\model\Class.js
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-11-07 13:53:40
 */
'use strict';

module.exports = (app) => {
  const {
    STRING,
    BOOLEAN,
    BIGINT
  } = app.Sequelize;

  const User = app.model.define('student', {
    c_id: {
      type: BIGINT,
      primaryKey: true
    },
    c_name: {
      type: STRING(30),
      allowNull: false
    },
    t_id: {
      type: DIGINT,
      allowNull: false
    },
    c_department: {
      type: STRING(30),
      allowNull: false
    }
  });

  return Student;
};