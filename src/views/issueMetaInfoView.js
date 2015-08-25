// This view renders standard issue information: title, number, etc.
var IssueMetaInfoView = Backbone.View.extend({

	className: 'issue-meta-info-view',

	template: _.template($('#issue-meta-info-tmpl').length > 0 ? $('#issue-meta-info-tmpl').html() : ''),

	initialize: function(options) {
		this.options = options;
	},

	render: function() {
		var html = this.template(this.options);
		this.$el.html(html);
		return this;
	}
});
