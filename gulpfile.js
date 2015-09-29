var gulp      = require('gulp');
var babel     = require('gulp-babel');
var rimraf    = require('rimraf');

var config = {
  inputDir:  './src/**/*.js',
  outputDir:  './build/'
};

// clean the output directory
gulp.task('clean', function(callback){
  rimraf(config.outputDir, callback);
});

// Build the ES6 file
function bundle() {
  return gulp.src( config.inputDir )
    .pipe(
      babel({
        optional: [
          "es7.asyncFunctions",
          "runtime"
        ]
      })
    )
    .pipe(
      gulp.dest( config.outputDir )
    )
}

gulp.task('build-persistent', ['clean'], function() {
  return bundle();
});

gulp.task('build', ['build-persistent'], function() {
  process.exit(0);
});

gulp.task('default', ['build'], function() {
  process.exit(0);
});
