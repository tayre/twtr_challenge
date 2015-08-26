// This view renders a back button control.
var BackButtonView = Backbone.View.extend({

	template: _.template($('#back-button-tmpl').length > 0 ? $('#back-button-tmpl').html() : ''),

	events: {
		'click .pageButton': 'onClick'
	},

	onClick: function(event) {
		window.history.back();
		return false;
	},

	render: function() {
		var html = this.template();
		this.$el.html(html);
		return this;
	}
});
