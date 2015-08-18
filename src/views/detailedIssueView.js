// view for displaying detailed issue, which contains subviews for the reporter, labels, full summary, comments, etc ...
var DetailedIssueView = Backbone.View.extend({

	initialize: function() {
		this.listenTo(this.model, 'sync', this.render); // render this view after fetching data
	},

	getData: function() {
		this.model.fetch();
	},

	render: function() {

		$('#secondary-view-container').hide(); // do not show page controls on details page
		
		// append title, state, and number
		var detailedIssueMetaInfoView = new DetailedIssueMetaInfoView({ title: this.model.get('title'), number: this.model.get('number'), state: this.model.get('state') });
		this.$el.append(detailedIssueMetaInfoView.render().$el);

		// append labels
		var labels = this.model.get('labels');
		var labelView = new LabelView(labels);
		this.$el.append(labelView.render().$el);

		// append reporter
		var reporter = this.model.get('user');
		var reporterView = new ReporterView(reporter);
		this.$el.append(reporterView.render().$el);
		
		// append summary text
		var summaryText = this.model.get('body');
		if (summaryText.length > 0) {
			var fullSummaryView = new FullSummaryView({ 'body': summaryText });
			this.$el.append(fullSummaryView.render().$el);
		}

		// append comments
		if (this.model.get('comments') > 0) {
			var commentCollection = new CommentCollection();
			commentCollection.url = this.model.get('comments_url');

			this.commentListView = new CommentListView({
				collection: commentCollection,
				parentSelector: '#primary-view-container' // pass a selector so the view can attach itself somewhere once data has been fetched
			});

			this.commentListView.getData();
		}

		// write to DOM
		$("#primary-view-container").html(this.$el.html());
		
		return this;
	}
});
