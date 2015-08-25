// This model represents an individual GitHub issue.
var IssueModel = Backbone.Model.extend({});

// Maintain a collection of issue models.
var IssueCollection = Backbone.Collection.extend({
	model: IssueModel
});
