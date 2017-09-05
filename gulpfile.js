var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var minifyCss = require('gulp-minify-css'); //minifies css
var concat = require('gulp-concat');        //joins multiple files into one
var rename = require('gulp-rename');        //renames files
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

var SCSS_SRC = [
	'node_modules/bootstrap/scss/bootstrap.scss', 
	'node_modules/font-awesome/scss/font-awesome.scss',
	'src/sass/*.scss'];

var jsFiles = [
	'src/js/*.js'];

var jsFilesmin = [
	'node_modules/jquery/dist/jquery.min.js', 
	'node_modules/popper.js/dist/umd/popper.min.js', 
	'node_modules/bootstrap/dist/js/bootstrap.min.js', 
	'node_modules/jquery-validation/dist/jquery.validate.min.js', 
	'node_modules/jquery-validation/dist/localization/messages_fr.js'];

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('scripts', function() {
    gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js')) //writes the renamed file to the destination
    	.pipe(browserSync.stream())
});


gulp.task('sass', function() {
  gulp.src(SCSS_SRC)                          //reads all the SASS files
    .pipe(sass().on('error', sass.logError))  //compiles SASS to CSS and logs errors
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(minifyCss())                        //minifies the CSS files 
    .pipe(concat('style.css'))  //concatenates all the CSS files into one 
    .pipe(rename({              //renames the concatenated CSS file
      basename : 'style',       //the base name of the renamed CSS file
      extname : '.min.css'      //the extension fo the renamed CSS file
    }))
    .pipe(gulp.dest('build/css')) //writes the renamed file to the destination
	.pipe(browserSync.stream())
});

gulp.task('copyJsVendor', function () {
    gulp
     .src(jsFilesmin)
     .pipe(gulp.dest('build/js'))
});

gulp.task('copyHtml', function () {
    gulp
     .src('src/*')
     .pipe(gulp.dest('build'))
});

gulp.task('copyAssets', function () {
    gulp
     .src('src/assets/*')
     .pipe(gulp.dest('build/assets'))
});

gulp.task('copyFonts', function () {
    gulp
     .src('src/fonts/*')
     .pipe(gulp.dest('build/fonts'))
});

gulp.task('serve', ['copyHtml', 'copyAssets', 'copyJsVendor', 'copyFonts', 'sass', 'scripts'], function() {
	
	browserSync.init({
		server: "./build"
	});

	gulp.watch(['src/sass/*.scss'], ['sass']);
	
	gulp.watch([jsFiles], ['scripts']);
	gulp.watch(['src/*'], ['copyHtml']);
	gulp.watch(['src/assets/*'], ['copyAssets']);
	gulp.watch(['src/fonts/*'], ['copyFonts']);
	gulp.watch("build/*").on('change', browserSync.reload);
});


gulp.task('default', ['sass', 'scripts', 'serve']);
