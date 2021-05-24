let nunjucks = require("nunjucks");
nunjucks.configure({ autoescape: true }); // 自动转义
// 过滤器，类似vue filter
let result = nunjucks.renderString(
  `
    {% if score >=90 %}
        优秀
    {% elseif score >= 60 %}
        及格
    {% else %}
        不及格
    {% endif %}
`,
  {
    score: 61,
  }
);
console.log("result", result);
