var gulp = require('gulp');
var clean = require('gulp-clean');           //删除构建文件
var sass = require('gulp-ruby-sass');        // sass scss编译
var livereload = require('gulp-livereload'); // 网页自动刷新（服务器控制客户端同步刷新）
var webserver = require('gulp-webserver');   // 本地服务器

gulp.task('webserver', function() {
    gulp.src( './app' ) // 服务器目录（./代表根目录）
        .pipe(webserver({ // 运行gulp-webserver
            livereload: true, // 启用LiveReload
            open: true // 服务器启动时自动打开网页
        }));
});

gulp.task('clean',function () {
    return gulp.src('dist')
        .pipe(clean())
});

// sass编译
//插件提供4种输出格式：
// nested：嵌套缩进的css代码，它是默认值。
// expanded：没有缩进的、扩展的css代码。
// compact：简洁格式的css代码。
// compressed：压缩后的css代码。
gulp.task('sass',function () {
    return sass('app/sass/**/!(_*).scss',{
        style: 'compact'
    }).on('error',function (err) {
        console.log('Error', err.message);
    }).pipe(gulp.dest('dist'))
});

// 监听任务
gulp.task('watch',function(){
    gulp.watch( './app/**/*.html', ['html']) // 监听根目录下所有.html文件
});

// html文件复制
gulp.task('html', function() {
    return gulp.src('app/**/*.html') // 指明源文件路径、并进行文件匹配
        .pipe(gulp.dest('dist')); // 输出路径
});

// 默认任务
gulp.task('default',['webserver','watch']);
