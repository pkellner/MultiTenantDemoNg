var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var browserSync = require('browser-sync').create();

function bundle (bundler) {
    return bundler
        .bundle()
        .on('error', function (e) {
            gutil.log(e.message);
        })
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
}

gulp.task('watch', function () {
    var watcher = watchify(browserify('./angu', watchify.args));
    bundle(watcher);
    watcher.on('update', function () {
        bundle(watcher);
    });
    watcher.on('log', gutil.log);

    browserSync.init({
        server: './dist',
        logFileChanges: false
    });
});

gulp.task('js', function () {
    return bundle(browserify('./angu/index.js'));
});

