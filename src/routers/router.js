Router = Backbone.Router.extend({

	routes: {
		'':					'home',
		'page?*query':		'page',
		'details/:number':	'details',
		'*splat': 			'default'
	},

	// The router will have an instance of view manager, to orchestrate view cleanup.
	initialize: function(options) {
		this.viewManager = options.viewManager;
	},

	// The "landing" page: render a list of issues starting at page = 1.
	home: function() {
		var collection = new IssueCollection();
		collection.url = Config.base_url + 'issues?page=1&per_page=' + Config.results_per_page;

		var view = new IssueListView({
			collection: collection,
			parentSelector: '#primary-view-container'
		});
		this.viewManager.showView(view);
	},

	// Some linkage page; used to pass a query string to api endpoint: e.g., when a user sets page > 1.
	page: function(query) {
		var collection = new IssueCollection();
		collection.url = Config.base_url + 'issues?' + query;

		var view = new IssueListView({
			collection: collection,
			parentSelector: '#primary-view-container'
		});
		this.viewManager.showView(view);
	},

	// The issue details "page": render the issue details.
	details: function(number) {
		var model = new IssueModel();
		model.url = Config.base_url + 'issues/' + number;

		var view = new DetailedIssueView({
			model: model
		});
		this.viewManager.showView(view);
	},

	// no-op
	default: function() {}
});
