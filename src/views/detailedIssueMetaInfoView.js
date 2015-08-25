// This view renders a standard issue information: title, number, etc.
var DetailedIssueMetaInfoView = Backbone.View.extend({
	
	className: 'detailed-issue-meta-info-view',
	
	template: _.template($('#detailed-issue-meta-info-tmpl').length > 0 ? $('#detailed-issue-meta-info-tmpl').html() : ''),

	initialize: function(options) {
		this.options = options;
	},

	render: function() {
		var html = this.template(this.options);
		this.$el.html(html);
		return this;
	}
});
