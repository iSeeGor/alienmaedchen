const smartGrid = require('smart-grid');

module.exports = function () {
    $.gulp.task('grid', () => {

        const options = {
			filename: "_grid",
			outputStyle: "scss",
			container: {
				maxWidth: "1450px", // фактическая ширина макета + 20px
				fields: "10px", // padding контейнера
			},

			// offset: "30px", // растояние между колонками, 

			breakPoints: {
				xl: {
					width: "1490px"
				},
				lg: {
					width: "1240px"
					// fields: "20px",
				},
				md: {
					width: "1000px"
					// fields: "10px"
				},
				sm: {
					width: "768px"
				},
				xs: {
					width: "580px"
				}
			},
		};

		return function grid(done){
			smartGrid('./src/scss/settings/', options);
			// done();
		}();


    });

	
}