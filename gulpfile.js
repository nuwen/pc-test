const { series, src, dest, watch } = require("gulp")
const sass = require("gulp-sass")
const sassGlob = require("gulp-sass-glob")
const gulppostCSS = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
const rename = require("gulp-rename")

sass.compiler = require("node-sass")

function defaultTask(cb) {
  // place code for your default task here
  cb()
}

function gulpSASS(cb) {
  return src("./src/styles/sass/main.scss")
    .pipe(sassGlob())
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./src/styles/css"))
}

function postCSS(cb) {
  let plugins = [
    autoprefixer({
      grid: true,
    }),
    cssnano(),
  ]
  return src("./src/styles/css/main.css")
    .pipe(gulppostCSS(plugins))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("./src/styles/css/"))
}

exports.default = series(gulpSASS, postCSS)
watch(["./src/styles/sass/**/*.{sass,scss}"], series(gulpSASS, postCSS))
