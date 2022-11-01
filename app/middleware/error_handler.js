
/*
 * @Author: Post_Malone
 * @Description:
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_serves\app\middleware\error_handler.js
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-26 22:38:17
 */
module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      // ctx.app.emit('error', err, ctx);

      const status = err.status || 500;
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error = status === 500 && ctx.app.config.env === 'prod'
        ? 'Internal Server Error'
        : err.message;
      // switch (err.message) {
      //   case errorType.NAME_OR_PASSWORD_OR_TYPE_IS_WRONG:
      //     status = 403
      //     message = "用户账号、密码和类型错误"
      //     break;
      //   case errorType.PASSWORD_IS_WRONG:
      //     status = 403
      //     message = "密码错误"
      //     break;
      //   case errorType.USER_IS_EXIST:
      //     status = 403
      //     message = "用户已经存在"
      //     break;
      //   case errorType.USER_IS_NOT_EXIST:
      //     status = 403
      //     message = "用户不存在"
      //     break;
      //   case errorType.LACKTOKEN:
      //     status = 401
      //     message = "缺少token,访问失败"
      //     break;
      //   case errorType.UNAUTHORIZATION:
      //     status = 401
      //     message = "token无效"
      //     break;
      //   case errorType.UNPEIMISSION:
      //     status = 403
      //     message = "没有访问权限"
      //     break;
      //   case errorType.AVATAR_UPLOAD_FAILURE:
      //     status = 405
      //     message = "头像上传失败"
      //     break;
      //   case errorType.PASSWORD_IS_NONSTANDARD:
      //     status = 403
      //     message = "密码为6～15位且必须包含字母，可包含下划线和."
      //     break;
      //   case errorType.SEND_ERROR:
      //     status = 417
      //     message = "由于网络原因，发送失败！"
      //     break;
      //   case errorType.QUERY_ERROR:
      //     status = 417
      //     message = "由于网络问题，获取失败！"
      //     break;
      //   case errorType.FILE_FORMAT_UPLOAD_ERROR:
      //     status = 417
      //     message = "文件格式错误，上传失败！"
      //     break;
      //   case errorType.FILE_FORMAT_IMPORT_ERROR:
      //     status = 417
      //     message = "文件格式错误，导入失败！"
      //     break;
      //   case errorType.NETWORK_ERROR:
      //     status = 417
      //     message = "由于网络问题，操作失败！"
      //     break;
      //   case errorType.TABLE_DATA_FORMAT_ERROR:
      //     status = 417
      //     message = "表格数据错误，导入失败！"
      //     break;
      //   case errorType.CANT_DELETE_MANAGER:
      //     status = 417
      //     message = "错误的操作，不可以删除管理员！"
      //     break;
      //   case errorType.FIELD_CANT_NONE:
      //     status = 417
      //     message = "字段不可为空！"
      //     break;
      //   case errorType.DATA_IS_NOT_EXIST:
      //     status = 417
      //     message = "数据不存在！"
      //     break;
      //   default:
      //     status = 404
      //     message = "NOT FOUND"
      //     break;
      // }
      // 从 error 对象上读出各个属性，设置到响应中
      ctx.body = { error };
      ctx.status = status;
      return;
    }
  };
};
