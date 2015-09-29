var gulp = require('gulp'),
min = require('gulp-cssmin')
;

gulp.task('hello', function() {
  console.log("Hello World");
});

gulp.task('min', function() {
  gulp.src('css/*.css')
  .pipe(min())
  .pipe(gulp.dest("wwwroot/css"))
});

gulp.task("watch", function() {
  gulp.watch('css/*.css', ['min'])
})

gulp.task("default", ['hello','min','watch'])