let nunjucks = require("nunjucks");
nunjucks.configure({ autoescape: true }); // 自动转义
// 过滤器，类似vue filter
let result = nunjucks.renderString(`hello {{name | join('-')}}`, { name: ['a', 'b', 'c'] });
console.log("result", result);
