// view  for displaying page controls
var PagerView = Backbone.View.extend({

	template: _.template($('#pager-tmpl').length > 0 ? $('#pager-tmpl').html() : ''),

	initialize: function(options) {
		this.parentSelector = options.parentSelector;
	},

	render: function() {
		var html = this.template(this.model.toJSON());
		this.$el.html(html);
		$(this.parentSelector).html(this.$el.html());
		return this;
	}
});
