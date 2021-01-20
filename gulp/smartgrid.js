const smartGrid = require('smart-grid');

module.exports = function () {
    $.gulp.task('grid', () => {

        const options = {
			filename: "_grid",
			outputStyle: "scss",
			container: {
				maxWidth: "1460px", // фактическая ширина макета + 30px
				// fields: "60px", // padding контейнера
			},

			// offset: "30px", // растояние между колонками, 

			// breakPoints: {
			// 	lg: {
			// 		width: "1440px",
			// 		fields: "20px",
			// 	},
			// 	md: {
			// 		width: "1210px",
			// 		fields: "10px"
			// 	},
			// 	sm: {
			// 		width: "720px"
			// 	},
			// 	xs: {
			// 		width: "576px"
			// 	}
			// },
		};

		return function grid(done){
			smartGrid('./src/scss/settings/', options);
			// done();
		}();


    });

	
}