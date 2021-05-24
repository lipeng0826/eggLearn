const nunjucks = require("nunjucks");
const path = require("path");
nunjucks.configure(path.resolve("view"), { autoescape: false });
const result = nunjucks.render(`index.html`, { name: "李鹏" });
console.log("result", result);
