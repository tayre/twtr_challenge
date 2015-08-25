// This view renders a single GitHub comment.
var CommentView = Backbone.View.extend({

	className: 'comment-item-view',

	template: _.template($('#comment-item-tmpl').length > 0 ? $('#comment-item-tmpl').html() : ''),

	render: function() {
		var html = this.template(this.model.toJSON());
		this.$el.html(html);
		return this;
	}
});
