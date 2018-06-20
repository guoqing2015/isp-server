module.exports = app => {
    app.beforeStart(async () => {
        // 应用会等待这个函数执行完成才启动
        app.logger.info('init app');
        Array.prototype.indexOf = Array.prototype.indexOf ? Array.prototype.indexOf
            : (o, from) => {
                from = from || 0;
                var len = this.length;
                from += (from < 0) ? len : 0;
                for (; from < len; from++) {
                    if (this[from] === o)
                        return from;
                }
                return -1;
            };

        Array.prototype.remove = Array.prototype.remove ? Array.prototype.remove
            : (o) => {
                let index = this.indexOf(o);
                if (index != -1) {
                    this.splice(index, 1);
                }
            };


        const ctx = app.createAnonymousContext();

        app.secret = 'n7d3t7x7';
        //app.systemMap = {};
        //app.systemUrl = {};
        //app.interfaceLog = [];
        //app.allRouter = [];

        ctx.service.redis.set('systemMap',{});
        ctx.service.redis.set('systemUrl',{});
        ctx.service.redis.set('loginSystem',[]);
        ctx.service.redis.set('SynOrCancelResult',[]);


        // 清空redis
        // const keys=await app.redis.keys('*');
        // for(let key of keys){
        //     app.redis.del(key);
        // }


        // 初始化系统调用接口权限
        await ctx.service.authorService.invokePromiss();

        // 初始化接口调用实体
        //app.invokeEntitys = await app.mysql.query('select * from t_invoke_info');
        await ctx.service.redis.set('invokeEntitys',await app.mysql.query('select * from t_invoke_info'));

        //app.mysql.insert('t_test',{name:'sdsd',age:3,time:new Date()});
        console.log('app start');

        // 同步集成用户角色到流程引擎
        //ctx.service.authorService.actSynUser();
        app.logger.info('app started!!!!');
    });

    app.once('server', server => {

    });
};

