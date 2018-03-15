'use strict';

module.exports = app => {
    const { router, controller } = app;
    router.get('/index', controller.home.index);

    //登录
    router.post('/login',controller.home.login);

    //接口调用
    router.get('/invokeEntityInfo',controller.restful.toPage);
    router.post('/invokeInfo/infos',controller.restful.infos);
    router.post('/invokeInfo/invokes',controller.restful.invokes);
    router.post('/invokeInfo/test',controller.restful.test);
    router.post('/invokeInfo/save',controller.restful.save);
    router.delete('/invokeInfo/delete/:id',controller.restful.delete);

    //角色
    //获取角色列表
    router.get('/role/allRoles',controller.role.allRoles);
    //检查角色名唯一
    router.get('/role/codeUnique/:code/:systemId',controller.role.codeUnique);
    //保存角色
    router.post('/role/save',controller.role.save);
    //删除角色
    router.delete('/role/delete/:id',controller.role.delete);
    //保存角色菜单权限
    router.post('/role/saveRoleMenu',controller.role.saveRoleMenu);
    //角色菜单权限下拉菜单
    router.get('/role/roleMenu/:id',controller.role.roleMenu);
    //角色对应的菜单ID
    router.get('/role/roleMenuIds/:roleId',controller.role.roleMenuIds);
    //用户对应角色
    router.get('/role/userRole/:userId',controller.role.userRole);


    //获取菜单
    //根据父节点ID和当前角色获取子菜单
    router.get('/menu/currentMenu/:parentId',controller.menu.currentMenu);
    //获取当前角色下的所有菜单
    router.get('/menu/currentRoleMenu/',controller.menu.currentRoleMenu);
    //对应角色的完整菜单树
    router.get('/menu/menuTree',controller.menu.menuTree);

    //用户
    //用户列表
    router.get('/user/allUsers',controller.user.allUers);
    //保存用户角色
    router.post('/user/saveUserRole',controller.user.saveUserRole);


    //按钮
    //对应菜单下的按钮
    router.get('/btn/menuButton/:menuId',controller.button.menuButton);
    //按钮对应的角色
    router.get('/btn/buttonRole/:buttonId',controller.button.buttonRole);
    //保存按钮对应的角色
    router.post('/btn/saveButtonRole',controller.button.saveButtonRole);
    //保存按钮
    router.post('/btn/save',controller.button.save);
    //获取所有按钮,并根据角色判断按钮是否可用
    router.get('/btn/allButtons/',controller.button.allButtons);
    //删除按钮
    router.delete('/btn/delete/:id',controller.button.delete);

    //系统
    //获取应用系统列表
    router.get('/sys/allSystem',controller.system.allSystem);
    //检查系统编码唯一性
    router.get('/sys/checkUnique/:code',controller.system.checkUnique);
    //保存系统
    router.post('/sys/save',controller.system.save);
    //删除系统
    router.delete('/sys/delete/:id',controller.system.delete);
    //根据ID查询
    router.get('/sys/currentSys/:id',controller.system.currentSys);

    //系统功能
    //获取对应系统的功能列表
    router.get('/op/operations/:sysId',controller.operation.operations);
    //保存功能
    router.post('/op/save',controller.operation.save);
    //删除功能
    router.delete('/op/delete/:id',controller.operation.delete);
};
