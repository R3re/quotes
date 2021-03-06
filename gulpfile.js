var gulp = require ('gulp'),
    sass = require ('gulp-sass'),
    browserSync = require ('browser-sync');

gulp.task('scss', function (){
    return gulp.src('./sass/*.sass')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function (){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function (){
    gulp.watch('./sass/*.sass', gulp.parallel('scss'));
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));