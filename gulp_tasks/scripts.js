const gulp = require('gulp');
const browserSync = require('browser-sync');
const tslint = require('gulp-tslint');
const conf = require('../conf/gulp.conf');

gulp.task('scripts', scripts);

function scripts() {
  return gulp.src(conf.path.src('**/*.ts'))
    .pipe(tslint())
    .pipe(tslint.report('verbose'))
    .pipe(browserSync.stream());
}
