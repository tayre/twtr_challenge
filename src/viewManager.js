// This object manages view (i.e., "page") transitions in our single page application.
function ViewManager() {

	this.currentView = null;

	this.showView = function(view) {
		if (this.currentView !== null) {
			this.currentView.remove();
		}

		this.currentView = view;
		this.currentView.getData();
	};
}
