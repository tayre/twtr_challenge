// view for displaying full issue summary
var FullSummaryView = Backbone.View.extend({

	className: 'full-summary-view',

	template: _.template($('#full-summary-tmpl').length > 0 ? $('#full-summary-tmpl').html() : ''),

	initialize: function(options) {
		this.options = options;
	},

	render: function() {
		var html = this.template(this.options);
		this.$el.html(html);
		return this;
	}
});
