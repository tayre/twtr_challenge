// This view renders a list of all issues items.
var IssueListView = Backbone.View.extend({

	className: 'issuelist-view',

	initialize: function(options) {
		this.parentSelector = options.parentSelector;
		this.listenTo(this.collection, 'sync', this.render); // Once data has been fetched, we can render it to the DOM.
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

		this.collection.each(function(model) { // For each model in collection, bind an issue view and append to this' container.
			var item = new IssueView({ model: model });
			this.$el.append((item.render().$el));
		}, this);

		$(this.parentSelector).html(this.$el.html());

		return this;
	},
});