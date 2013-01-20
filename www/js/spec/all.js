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