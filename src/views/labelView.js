// This view renders an issue's labels.
var LabelView = Backbone.View.extend({

	className: 'label-view',
	tagName: 'ul',

	template: _.template($('#label-tmpl').length > 0 ? $('#label-tmpl').html() : ''),

	initialize: function(options) {
		this.options = options;
	},

	render: function() {
		var labels = { labels: this.options };
		var html = this.template(labels);
		this.$el.html(html);
		return this;
	}
});
