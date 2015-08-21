// a model for paging controls
var PagerModel = Backbone.Model.extend({
	defaults: {
		linkHeader: '', // the value of the Link HTTP response header
		nextPage: '', // url to next page
		prevPage: '' //url to previous page
	},

	initialize: function() {
		if(this.get('linkHeader')) {
			this.set({ nextPage: this.parseLinkHeader(this.get('linkHeader'), 'next') });
			this.set({ prevPage: this.parseLinkHeader(this.get('linkHeader'), 'prev') });
		}
	},

	// linkHeaderStr is the string value from Link HTTP response header @see http://tools.ietf.org/html/rfc5988
	// return a link object associated with the provided rel value, undefined otherwise
	parseLinkHeader: function(linkHeaderStr, relValue) {

		var linkHeader = linkHeaderStr.split(',');

		// split strings of the form url;rel='foo' 
		var links = _.map(linkHeader, function(item) {
			var obj = item.split(';');

			var urlString = obj[0].trim();
			var relString = obj[1].trim();

			return {
				url: urlString.substring(1, urlString.length - 1), // get link value which is currently of the form "<" URI-Reference ">"
				rel: relString
			};
		});

		//find the object requested
		var result = _.findWhere(links, {
			rel: 'rel="' + relValue + '"'
		});

		return result;
	}
});
