var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
    ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n',
    ' */\n',
    ''
].join('');

// Compiles SCSS files from /scss into /css
gulp.task('sass', function() {
    return gulp.src('src/main/webapp/scss/styles.scss')
        .pipe(sass())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('src/main/webapp/resources/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify compiled CSS
gulp.task('minify-css', ['sass'], function() {
    return gulp.src('src/main/webapp/resources/css/styles.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('src/main/webapp/resources/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify JS
gulp.task('minify-js', function() {
    return gulp.src('src/main/webapp/js/scripts.js')
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('src/main/webapp/resources/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Copy external libraries from /node_modules into /lib
gulp.task('copy', function() {
    gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('src/main/webapp/resources/lib/bootstrap'));

    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('src/main/webapp/resources/lib/jquery'));

    gulp.src(['node_modules/magnific-popup/dist/*'])
        .pipe(gulp.dest('src/main/webapp/resources/lib/magnific-popup'));

    gulp.src(['node_modules/scrollreveal/dist/*.js'])
        .pipe(gulp.dest('src/main/webapp/resources/lib/scrollreveal'));

    gulp.src(['node_modules/tether/dist/js/*.js'])
        .pipe(gulp.dest('src/main/webapp/resources/lib/tether'));

    gulp.src(['node_modules/popper.js/dist/umd/*.js', '!**/*.map'])
        .pipe(gulp.dest('src/main/webapp/resources/lib/popper.js'));

    gulp.src(['node_modules/jquery-validation/dist/*.js', 'node_modules/jquery-validation/dist/localization/messages_fr.js'])
        .pipe(gulp.dest('src/main/webapp/resources/lib/jquery-validation'));

    gulp.src(['node_modules/jquery-easing/dist/*.js', '!**/*.map'])
        .pipe(gulp.dest('src/main/webapp/resources/lib/jquery-easing'));

    gulp.src([
            'node_modules/font-awesome/**',
            '!node_modules/font-awesome/**/*.map',
            '!node_modules/font-awesome/.npmignore',
            '!node_modules/font-awesome/*.txt',
            '!node_modules/font-awesome/*.md',
            '!node_modules/font-awesome/*.json'
        ])
        .pipe(gulp.dest('src/main/webapp/resources/lib/font-awesome'))
});

// Run everything
gulp.task('default', ['copy', 'sass', 'minify-css', 'minify-js']);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'src/main/webapp/'
        }
    })
});

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'sass', 'minify-css', 'minify-js'], function() {
    gulp.watch('src/main/webapp/scss/*.scss', ['sass']);
    gulp.watch('src/main/webapp/css/*.css', ['minify-css']);
    gulp.watch('src/main/webapp/js/*.js', ['minify-js']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('src/main/webapp/*.html', browserSync.reload);
    gulp.watch('src/main/webapp/js/**/*.js', browserSync.reload);
});
