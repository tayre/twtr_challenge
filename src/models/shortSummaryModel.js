// a model for teaser summaries
var ShortSummaryModel = Backbone.Model.extend({
	defaults: {
		truncatedText: '', // the shortened text summary
		text: '' // the full text summary
	},

	initialize: function() {
		this.set({
			truncatedText: this.truncateText(this.get('text'), Config.maxSummaryLength)
		});
	},

	// returns the first maxlength characters of text, ending on a word boundary, and appends an ellipses
	truncateText: function(str, maxlength) {
		var result = str;

		if (str.length > maxlength) {
			result = str.substr(0, maxlength + 1);
			result = result.substr(0, result.lastIndexOf(' ')) + "...";
		}

		return result;
	}
});
