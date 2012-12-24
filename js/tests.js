requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
        tests: '../tests'
    }
});

require.config({
    baseUrl: 'js/lib',
//    urlArgs: 'cb=' + Math.random(),
    paths: {
        app: '../app',
        jasmine: 'jasmine/jasmine',
        'jasmine-html': 'jasmine/jasmine-html',
        spec: '../spec/'
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});

require(['jasmine-html',
    'spec/sorting-spec',
    'spec/prime-spec'
    ], function (jasmine) {

	// from https://groups.google.com/forum/?fromgroups=#!topic/jasmine-js/UtUqhN27rq0
	var reporter = new jasmine.HtmlReporter,
		env = jasmine.getEnv();
		
	env.specFilter = reporter.specFilter;
    env.addReporter(reporter)
    env.execute()
});