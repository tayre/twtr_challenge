// This is the application's entry point.
(function main() {

	var router = new Router({viewManager: new ViewManager()});

	// Route the initial URL, begin monitoring hash change events, and dispatching routes.
	Backbone.history.start();

})();
