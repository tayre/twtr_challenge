// an individual issue
var IssueModel = Backbone.Model.extend({});

// collection of issues
var IssueCollection = Backbone.Collection.extend({
	model: IssueModel
});