let nunjucks = require("nunjucks");
nunjucks.configure({ autoescape: true }); // 自动转义
// <div> --->  &lt;div&gt;
let result = nunjucks.renderString(`hello {{name}}`, { name: "李鹏" });
console.log("result", result);
