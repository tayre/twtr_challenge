// This view renders a GitHub user.
var ReporterView = Backbone.View.extend({

	className: 'reporter-view',

	template: _.template($('#reporter-tmpl').length > 0 ? $('#reporter-tmpl').html() : ''),

	initialize: function(options) {
		this.options = options;
	},

	render: function() {
		var html = this.template(this.options);
		this.$el.html(html);
		return this;
	}
});
