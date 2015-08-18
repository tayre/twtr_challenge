//  object to manage view (i.e., "page") transitions in our single page app
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
