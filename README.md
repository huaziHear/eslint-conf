# eslint-conf
Configuration parameters and interpretation of Eslint

### eslint的使用

*  全局安装eslint包
*  webstorm或者idea中cmd+,打开偏好设置
*  搜索eslint,右侧勾选enable (node eslint的路径默认已经设置,配置文件默认在项目根目录下也可以指定)
*  新建eslint配置文件,或者使用eslint命令创建(eslint -init)

###  创建eslint配置文件
    创建eslint配置文件有多种姿势,配置文件支持js,json,YAML.使用eslint -init也可以创建.eslint -init中有一种问答试的创建方式.
    类似于npm init非常很友好,包括 react es6 jsx 运行环境 单引号等等基础问题.

### eslint 配置介绍

[中文官网](http://eslint.cn/docs/rules/)   
    
    .eslintrc.js   推荐配置文件
    .eslintrc-backup.json   配置项json文件,主要用于查询配置的值(有的值可能是数组或者特殊值)
    .eslintrc-rule.json     全量的配置项
    
### 获取全量的配置项

进入此链接 http://eslint.cn/docs/rules/  在控制台执行脚本,即可打印出json字符串

``````
var domlist = $('.inuse-rules .rule-zh td p'),
    result = {},
    temp = [];
    
domlist.each(function(i,t){
    temp.push($(t).text());
});

for(var i=0;i<temp.length;i++){
    result[temp[i]] = temp[i+1];i++;
}

JSON.stringify(result)

``````

### 参考资料

http://eslint.org/
http://eslint.cn/docs/rules/
http://www.jianshu.com/p/1682b91756b1
http://morning.work/page/maintainable-nodejs/getting-started-with-eslint.html
