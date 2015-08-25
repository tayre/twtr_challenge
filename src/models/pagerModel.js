// This is the model containing data for paging controls.
var PagerModel = Backbone.Model.extend({
	defaults: {
		linkHeader: '', // The value of the Link HTTP response header.
		nextPage: '', // The url to next page.
		prevPage: '' // The url to previous page.
	},

	initialize: function() {
		if (this.get('linkHeader')) {
			this.set({
				nextPage: this.parseLinkHeader(this.get('linkHeader'), 'next')
			});
			this.set({
				prevPage: this.parseLinkHeader(this.get('linkHeader'), 'prev')
			});
		}
	},

	// linkHeaderStr is the string value from Link HTTP response header @see http://tools.ietf.org/html/rfc5988
	// Return a link object associated with the provided rel value. Return undefined otherwise.
	parseLinkHeader: function(linkHeaderStr, relValue) {

		var linkHeader = linkHeaderStr.split(',');

		// Split strings of the form url;rel='foo'.
		var links = _.map(linkHeader, function(item) {
			var obj = item.split(';');

			var urlString = obj[0].trim();
			var relString = obj[1].trim();

			return {
				url: urlString.substring(1, urlString.length - 1), // Get link value which is currently of the form "<" URI-Reference ">".
				rel: relString
			};
		});

		// Find the object requested.
		var result = _.findWhere(links, {
			rel: 'rel="' + relValue + '"'
		});

		return result;
	}
});
