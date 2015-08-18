// view for rendering a list of all issues items
var IssueListView = Backbone.View.extend({

	className: 'issuelist-view',

	initialize: function(options) {
		this.parentSelector = options.parentSelector;
		this.listenTo(this.collection, 'sync', this.render); // render this view after fetching data
	},

	getData: function() {
		this.collection.fetch({
			success: function(collection, response, options) {
				var pagerModel = new PagerModel({ linkHeader: options.xhr.getResponseHeader('Link') });
				var pagerView = new PagerView({ model: pagerModel, parentSelector: '#secondary-view-container' });
				pagerView.render();
			}
		});
	},

	render: function() {
		$('#secondary-view-container').show();

		// for each model in collection, bind a issue view and append to this' container
		this.collection.each(function(model) {
			var item = new IssueView({ model: model });
			this.$el.append((item.render().$el));
		}, this);

		// write to the DOM
		$(this.parentSelector).html(this.$el.html());

		return this;
	},
});