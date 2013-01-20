module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Configuration to be run (and then tested).
		requirejs: {
			compile: {
				options: {
					baseUrl: 'Algorithm',
					mainConfigFile: 'Algorithm/js/build.js' // not working yet
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask('build', ['requirejs']);
};