// This view renders a detailed issue, which contains sub-views for the reporter, labels, full summary, comments, etc.
var DetailedIssueView = Backbone.View.extend({

	initialize: function() {
		this.listenTo(this.model, 'sync', this.render); // Once data has been fetched, we can render it to the DOM.
	},

	getData: function() {
		this.model.fetch();
	},

	render: function() {

		var backButtonView = new BackButtonView();
		$('#secondary-view-container').html(backButtonView.render().$el);

		// Append the issue title, state, and number to this view.
		var detailedIssueMetaInfoView = new DetailedIssueMetaInfoView({
			title: this.model.get('title'),
			number: this.model.get('number'),
			state: this.model.get('state')
		});
		this.$el.append(detailedIssueMetaInfoView.render().$el);

		// Append labels to this view.
		var labels = this.model.get('labels');
		var labelView = new LabelView(labels);
		this.$el.append(labelView.render().$el);

		// Append a reporter to this view.
		var reporter = this.model.get('user');
		var reporterView = new ReporterView(reporter);
		this.$el.append(reporterView.render().$el);

		// Append the complete summary text to this view.
		var summaryText = this.model.get('body');
		if (summaryText.length > 0) {
			var fullSummaryView = new FullSummaryView({
				'body': summaryText
			});
			this.$el.append(fullSummaryView.render().$el);
		}

		// Append user comments to this view.
		if (this.model.get('comments') > 0) {
			var commentCollection = new CommentCollection();
			commentCollection.url = this.model.get('comments_url');

			this.commentListView = new CommentListView({
				collection: commentCollection,
				parentSelector: '#primary-view-container' // Pass a selector so the view can attach itself somewhere once data has been fetched.
			});

			this.commentListView.getData();
		}

		$("#primary-view-container").html(this.$el.html());

		return this;
	}
});
