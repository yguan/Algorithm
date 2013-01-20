require.config({
	//baseUrl: '../',
    paths: {
        app: 'app',
        spec: 'spec',
		config: 'config',
        jasmine: 'lib/jasmine/jasmine',
        'jasmine-html': 'lib/jasmine/jasmine-html'
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
	dir: '../../algorithm-build', // build output folder
    modules: [
        {
            name: 'tests',
			exclude: [
                'jasmine-html',
				'config'
            ]
        }
    ]
});
