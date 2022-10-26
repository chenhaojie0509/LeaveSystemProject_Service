/*
 * @Author: Post_Malone
 * @Description: 
 * @Data: Do not edit
 * @FilePath: \leaveSystemProject_serves\app\router.js
 * @LastEditors: chenhaojie
 * @LastEditTime: 2022-10-16 21:56:51
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  const checkTokenHandle = app.middleware.checkTokenHandle({
    secret: app.config.jwt.secret
  })

  router.post('/login', controller.user.login);

  router.post('/home', checkTokenHandle, controller.home.index);

  router.post('/UserMenu', checkTokenHandle, controller.menu.getMenu)
};