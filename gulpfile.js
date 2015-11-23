var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var browserSync = require('browser-sync').create();
var format = require('util').format;
var merge = require('utils-merge');
var argv        = require('yargs').argv;
var chalk       = require('chalk');



var tenantName = argv.tenantName;
var mock = argv.mock;
var production = argv.production;

// default: gulp watch --tenantName angu --mock true --production false

if (!tenantName) {
    tenantName = 'angu';
    gutil.log('no tenantName defined with --tenantName, defaulting to', chalk.magenta('angu'));
}

if (!mock) {
    mock = true;
    gutil.log('no mock defined with --mock, defaulting to', chalk.magenta('true'));
}

if (!production) {
    production = false;
    gutil.log('no production defined with --production, defaulting to', chalk.magenta('false'));
}

gutil.log(format('tenantName: %s; mock: %s;  production: %s',tenantName,mock,production));



function bundle (bundler) {
    if (!production) {
        return bundler
            .bundle()
            .on('error', function (e) {
                gutil.log(e.message);
            })
            .pipe(source('app.js'))

            .pipe(gulp.dest('./dist'))
            .pipe(browserSync.stream());
    } else {
        return bundler
            .bundle()
            .on('error', function (e) {
                gutil.log(e.message);
            })
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(uglify())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('./dist'));
    }
}

    gulp.task('watch', function () {
        var baseDir = format('./%s',tenantName);
        var combinedArgs = merge(watchify.args, { debug: true });
        var b = browserify(baseDir,combinedArgs);
        if (mock == true) { b.add(format('%s/mock',tenantName));}
        var watcher = watchify(b);

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
    var baseDirFile = format('./%s/index.js',tenantName);
    var b = browserify(baseDirFile,{debug: true});
    b.add(format('./%s/mock', tenantName));
    return b;
});

gulp.task('copyfiles', function () {

    var srcHtmlDir = format('%s/src/**/*.html',tenantName);
    gulp.src(srcHtmlDir)
        .pipe(gulp.dest('dist/templates/'));

    //gulp.src('angu/mock/data/**/*.json')
    //    .pipe(gulp.dest('dist/angu/mock/data/'));
});
