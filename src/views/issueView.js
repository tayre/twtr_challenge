// This view renders a single issue, which contains sub-views for the reporter, labels, truncated summary, etc.
var IssueView = Backbone.View.extend({

	className: 'issuelist-item-view',

	render: function() {

		// Append labels to this view.
		var labels = this.model.get('labels');
		var labelView = new LabelView(labels);
		this.$el.append(labelView.render().$el);

		// Append the issue title and number to this view.
		var issueMetaInfoView = new IssueMetaInfoView({
			title: this.model.get('title'),
			number: this.model.get('number'),
			state: this.model.get('state')
		});
		this.$el.append(issueMetaInfoView.render().$el);

		// Append a reporter to this view.
		var reporter = this.model.get('user');
		var reporterView = new ReporterView(reporter);
		this.$el.append(reporterView.render().$el);

		// Append summary text to this view.
		var summaryText = this.model.get('body');
		if (summaryText !== null && summaryText.length > 0) {
			var shortSummaryModel = new ShortSummaryModel({
				text: summaryText
			});
			var shortSummaryView = new ShortSummaryView({
				model: shortSummaryModel
			});
			this.$el.append(shortSummaryView.render().$el);
		}

		return this;
	}
});
