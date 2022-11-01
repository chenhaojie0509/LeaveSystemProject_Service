/*
 * @Author: Post_Malone
 * @Description:
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_serves\app\middleware\check_token_handle.js
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-26 22:37:54
 */
module.exports = options => {
  return async function checkTokenHandle(ctx, next) {
    const token = ctx.request.header.authorization.split(' ')[1];

    if (token) {
      await next();
      try {
        // 解码token
        const decode = await ctx.app.jwt.verify(token, options.secret);
      } catch (error) {
        return ctx.throw(401, 'token失效或解析错误');
      }
    } else {
      return ctx.throw(401, '缺少token');
    }
  };
};
