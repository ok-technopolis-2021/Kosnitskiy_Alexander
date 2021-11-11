const gulp = require('gulp');
const concat = require('gulp-concat');
const less = require('gulp-less');
const inject = require('gulp-inject');
const rollup = require('rollup');
const image = require('gulp-image');

const resourcesPath = 'src/resources/*';
const stylesPath = './src/styles/**/*.scss';
const jsPath = 'src/**/*.js';
const htmlPath = './src/index.html';
const docsPath = './docs/';
const rollupConfig = {
    input: 'src/app.js',
    plugins: [
    ]
}

const imageOptimizingSettings = {
    pngquant: true,
    optipng: true,
    zopflipng: true,
    mozjpeg: true,
    gifsicle: true,
    svgo: true,
    concurrent: 10,
};

/**
 * Описание задачи на сборку javascript, с помощью rollup
 */
gulp.task('rollup', async (done) => {
    const bundle = await rollup.rollup(rollupConfig);

    bundle.write({
        format: 'esm',
        file: 'docs/app.js'
    });

    done();
});

/**
* Простая задача на компиляцию scss файлов в файл style.css, ее отличие от rollup плагина rollup-plugin-scss
* в том, что файлы подключаются по маске, а в rollup они подключаются явно через import
**/
gulp.task('css', () => {
    return gulp.src(stylesPath)
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest(docsPath));
});

/**
* Вотчинг всех файлов которые мы
**/
gulp.task('watch', function (done) {
    gulp.watch(stylesPath, gulp.series('css'));
    gulp.watch(jsPath, gulp.series('rollup'));
    done();
});

/**
 * Копирование картинок и прочего из папки resources, картинки обжимаются с помощью наастроек imageOptimizingSettings
 */
gulp.task('resources', function () {
    return gulp.src(resourcesPath)
        .pipe(image(imageOptimizingSettings))
        .pipe(gulp.dest(`${docsPath}/resources/`));
});

/**
 * Описание задачи на вставку js & css файлов в наш шаблон index.html
 */
 gulp.task('html', function () {
    const target = gulp.src(htmlPath);
    const sources = gulp.src(['./docs/**/*.js', './docs/**/*.css'], { read: false });

    return target.pipe(inject(sources, { ignorePath: '../docs', relative: true, addPrefix: '.' }))
        .pipe(gulp.dest(docsPath));
});

gulp.task('default', gulp.series('rollup', 'css', 'resources', 'html', 'watch'));
gulp.task('build', gulp.series('rollup', 'css', 'resources', 'html'));