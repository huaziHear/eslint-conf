//http://eslint.cn/docs/rules/
var ps = $('.inuse-rules .rule-zh td p')

var result = {},
    temp = [];
ps.each(function(i,t){
    temp.push($(t).text());
});

for(var i=0;i<temp.length;i++){
    result[temp[i]] = temp[i+1];i++;
}
JSON.stringify(result)
