module.exports = function () {
    $.gulp.task('browser-sync', () => {

        $.browserSync.init({
            // server: {
            //     baseDir: './' 
            // },

            proxy: 'http://alienmaedchen.loc',
            notify: false,
            online: true
        });

    });
}