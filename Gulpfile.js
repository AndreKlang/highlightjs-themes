var gulp = require('gulp');
var sass = require('gulp-sass');

var skin_dir = '.';

// build all styles
gulp.task('styles', function() {

    // frontend theme
    gulp.src(skin_dir+'/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(skin_dir+'/css/'));
});

// Watcher task
gulp.task('watcher',function() {

    gulp.watch([
        skin_dir+'/scss/**/*.scss'
    ],[
        'styles'
    ]);
});

// watch task
// pre-runs other tasks fist
gulp.task('watch', ['styles', 'watcher']);
gulp.task('w', ['watch']); // alias

// default task
// build all
gulp.task('default', ['styles']);

