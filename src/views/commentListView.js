// This view renders a list of all comments.
var CommentListView = Backbone.View.extend({

	initialize: function(options) {
		this.parentSelector = options.parentSelector;
		this.listenTo(this.collection, 'sync', this.render); // render this view after fetching data
	},

	getData: function() {
		this.collection.fetch();
	},

	render: function() {

		// for each model in collection, bind a comment view and append to this' container
		this.collection.each(function(model) {
			var item = new CommentView({
				model: model
			});
			this.$el.append(item.render().$el); // append child view
		}, this);

		$(this.parentSelector).append(this.$el.html());

		return this;
	},
});
