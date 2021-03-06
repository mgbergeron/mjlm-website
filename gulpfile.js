var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile bootstrap sass into CSS
gulp.task('sass-bootstrap', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss'])
        .pipe(sass())
        .pipe(gulp.dest("css/vendor/"));
});

// Move the javascript files into our /src/js folder
gulp.task('js-vendor', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js.map',
    'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js', 'node_modules/popper.js/dist/umd/popper.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js.map',
    'node_modules/scrollreveal/dist/scrollreveal.min.js', 'node_modules/jquery.easing/jquery.easing.min.js'])
        .pipe(gulp.dest("static/js/vendor/"));
});

gulp.task('default', ['sass-bootstrap', 'js-vendor']);