module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Configuration to be run (and then tested).
		requirejs: {
			compile: {
				options: {
					baseUrl: 'www',
					mainConfigFile: 'www/js/config.js'
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask('build', ['requirejs']);
};