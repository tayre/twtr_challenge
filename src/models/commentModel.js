// This model represents an individual GitHub comment.
var CommentModel = Backbone.Model.extend({});

// Maintain a collection of comment models.
var CommentCollection = Backbone.Collection.extend({
	model: CommentModel
});
