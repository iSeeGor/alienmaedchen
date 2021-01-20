const assets = ['build/**/*','!build/favicon','!build/robots.txt','!build/.htaccess'];
// const images = ['assets/**/*', '!assets/vendor'];

module.exports = () => {
    $.gulp.task('clean', function () {
        return $.del(assets);
    })
}