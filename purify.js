const purify = require("purify-css")

let content = ['**/*.html']
let css = ['./css/bootstrap.min.css']
let options = {
    output: "./purifyBootstrap.css",
    minify: false,
    info: true
}
purify(content, css, options)