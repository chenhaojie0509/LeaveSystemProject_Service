/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_serves\app\model\student.js
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-11-07 14:08:49
 */
'use strict';

module.exports = (app) => {
  const {
    STRING,
    INTEGER,
    DATE,
    BOOLEAN,
    BIGINT
  } = app.Sequelize;

  const User = app.model.define('student', {
    s_id: {
      type: BIGINT,
      primaryKey: true
    },
    name: STRING(10),
    sex: STRING(2),
    password: STRING,
    address: STRING(100),
    email: STRING(30),
    phonenumber: STRING(30),
    c_id: {
      type: BIGINT,
      references: {
        // 这是对另一个模型的参考
        model: Class,

        // 这是引用模型的列名
        key: 'c_id',

        // 使用 PostgreSQL,可以通过 Deferrable 类型声明何时检查外键约束.
        deferrable: Deferrable.INITIALLY_IMMEDIATE
        // 参数:
        // - `Deferrable.INITIALLY_IMMEDIATE` - 立即检查外键约束
        // - `Deferrable.INITIALLY_DEFERRED` - 将所有外键约束检查推迟到事务结束
        // - `Deferrable.NOT` - 完全不推迟检查(默认) - 这将不允许你动态更改事务中的规则
      }
    },
    inschool_state: BOOLEAN,
    create_time: DATE,
    update_time: DATE,
  });

  return Student;
};