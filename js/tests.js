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

    // Set up the HTML reporter - this is responsible for
    // aggregating the results reported by Jasmine as the
    // tests and suites are executed.
    jasmine.getEnv().addReporter(
        new jasmine.HtmlReporter()
    );

    // Run all the loaded test specs.
    jasmine.getEnv().execute();

});