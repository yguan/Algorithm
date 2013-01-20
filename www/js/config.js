require.config({
	//appDir: '../Algorithm',
	//baseUrl: 'js',
    paths: {
        app: 'js/app',
        spec: 'js/spec',
		config: 'js/config',
        jasmine: 'js/lib/jasmine/jasmine',
        'jasmine-html': 'js/lib/jasmine/jasmine-html'
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    },
	dir: '../../www-build', // build output folder
    modules: [
        {
            name: 'js/tests',
			exclude: [
                'jasmine-html',
				'config'
            ]
        }
    ],
	optimize: "uglify"
});
