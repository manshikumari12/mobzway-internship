const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const reactify = require('gulp-react');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const inlineSource = require('gulp-inline-source');

gulp.task('bundle', function () {
    return browserify('./src/app.js')
        .transform('reactify')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('html', function () {
    return gulp.src('./src/index.html')
        .pipe(replace('<!-- bundle -->', '<script src="bundle.js"></script>'))
        .pipe(inlineSource())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series('bundle', 'html'));
