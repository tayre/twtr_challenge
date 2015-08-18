// view to display a a short summary
var ShortSummaryView = Backbone.View.extend({

	className: 'short-summary-view',

	template: _.template($('#short-summary-tmpl').length > 0 ? $('#short-summary-tmpl').html() : ''),

	render: function() {
		var html = this.template(this.model.toJSON());
		this.$el.html(html);
		return this;
	}
});
