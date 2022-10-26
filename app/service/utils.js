/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_serves\app\service\utils.js
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-16 21:50:35
 */
'use strict';
const Service = require('egg').Service;
const cryto = require("crypto")
const path = require('path')
const fs = require('fs');

class UtilsService extends Service {
  
  async md5password(password) {
    const md5 = cryto.createHash('md5')
    const result = md5.update(password).digest('hex')
    return result;
  }

  // 读取JSON文件
  async getJsonData(target) {
    const {ctx} = this
    return new Promise((resolve,reject)=>{
      fs.readFile(path.join(__dirname, target), 'utf8', (err, data) => {
        if (err) {
          reject(err)
        }
        resolve(JSON.parse(data))
      })
    })
  }
}
module.exports = UtilsService;