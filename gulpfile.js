const gulp = require('gulp');
const javascriptObfuscator = require('gulp-javascript-obfuscator');

function defaultTask() {
    return gulp
			.src("./app/renderer.js")
			.pipe(
				javascriptObfuscator({
					compact: false,
					controlFlowFlattening: true,
					controlFlowFlatteningThreshold: 1,
					numbersToExpressions: true,
					simplify: true,
					shuffleStringArray: true,
					splitStrings: true,
					stringArrayThreshold: 1,
				})
			)
			.pipe(gulp.dest("dist"));
}
exports.default = defaultTask;