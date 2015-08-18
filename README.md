## GitHub Issues Viewer

This is a [backbone.js](http://backbonejs.org/) application that fetches open issues from the rails [repo](//github.com/rails/rails/issues).

## Running the App
- Launch `index.html` in a browser.
- Tests are run via Jasmine: navigate to `tests/index.html`.

## Design Details
- `src/` contains all the JavaScript source.
- `sass/` contains all the stylesheets.

This is a single page app, however the user can be in multiple states. States are handled by the router and its view manager.

The initial state is the issue list "page". This page is rendered by `IssueListView`, which is bound to a collection of issue models. Each issue in the collection is rendered by `IssueView`.

When a user selects a title anchor they transition to the detailed issue "page". This page is rendered by `DetailedIssueView`, which is bound to a single issue model.

We are using [underscore.js](http://underscorejs.org) for templating, and [Foundation](http://foundation.zurb.com) for layout. 
The app should display reasonably well on mobile devices.

## Notes
- Unauthenticated requests to the GitHub API are [rate limited](//developer.github.com/v3/#rate-limiting) to 60/hour.

## Todo Items
- Auto-link users that are mentioned with @-notation: currently I'm using [marked.js](//github.com/chjj/marked) to display GFM in issue summaries and comments. Perhaps I could extend this library and inspect the parse tree it constructs. Seems like an interesting problem.

- Better handling of 403 (and other error) responses from GitHub API.

- If this were a production app I would be concerned about accessibility, internationalization, and caching assets locally. I might also consider parsing markdown server-side, or using the GitHub [markdown](https://developer.github.com/v3/markdown/) API.
