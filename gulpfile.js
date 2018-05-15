var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile sass into CSS
gulp.task('sass-bootstrap', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss'])
        .pipe(sass())
        .pipe(gulp.dest("css/vendor/"));
});

// Move the javascript files into our /src/js folder
gulp.task('js-bootstrap', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest("static/js/vendor/"));
});

gulp.task('default', ['sass-bootstrap', 'js-bootstrap']);