// view for displaying and single issue, which contains subviews for the reporter, labels, truncated summary, etc.
var IssueView = Backbone.View.extend({

	className: 'issuelist-item-view',

	render: function() {

		// append labels
		var labels = this.model.get('labels');
		var labelView = new LabelView(labels);
		this.$el.append(labelView.render().$el);

		// append title and number
		var issueMetaInfoView = new IssueMetaInfoView({ title: this.model.get('title'), number: this.model.get('number'), state: this.model.get('state') });
		this.$el.append(issueMetaInfoView.render().$el);

		// append reporter
		var reporter = this.model.get('user');
		var reporterView = new ReporterView(reporter);
		this.$el.append(reporterView.render().$el);

		// append summary text
		var summaryText = this.model.get('body');
		if (summaryText !== null && summaryText.length > 0) {
			var shortSummaryModel = new ShortSummaryModel({ text: summaryText }); // this model will handle truncating the text
			var shortSummaryView = new ShortSummaryView({ model: shortSummaryModel });
			this.$el.append(shortSummaryView.render().$el);
		}

		return this;
	}
});
