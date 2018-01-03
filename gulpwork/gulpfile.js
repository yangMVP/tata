var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var minifyCSS = require('gulp-minify-css');
var imageMin = require('gulp-imagemin');
gulp.task('minifyjs', function (cb) {
    pump([
            gulp.src('lib/*.js'),
            uglify(),
            gulp.dest('dist')
        ],
        cb
    );
});

gulp.task('minifycss', function() {
    gulp.src('lib/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/'))
});
gulp.task('image',function(){
    gulp.src('lib/*.*')
        .pipe(imageMin({progressive: true}))
        .pipe(gulp.dest('dist/images'))
})
gulp.task('default',function(){
    gulp.start('minifycss','minifyjs','image');
});
