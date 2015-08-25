// This is the model containing data for an issue's "teaser" summary.
var ShortSummaryModel = Backbone.Model.extend({
	defaults: {
		truncatedText: '', // The shortened text summary.
		text: '' // The full text summary.
	},

	initialize: function() {
		this.set({
			truncatedText: this.truncateText(this.get('text'), Config.maxSummaryLength)
		});
	},

	// Returns the first maxlength characters of text, ending on a word boundary, and append an ellipses.
	truncateText: function(str, maxlength) {
		var result = str;

		if (str.length > maxlength) {
			result = str.substr(0, maxlength + 1);
			result = result.substr(0, result.lastIndexOf(' ')) + "...";
		}

		return result;
	}
});
