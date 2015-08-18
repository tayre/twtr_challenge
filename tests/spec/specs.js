describe("ShortSummaryModel", function() {

	beforeEach(function() {
		this.model = new ShortSummaryModel();
	});

	it("should expose have a default text attribute", function() {
		expect(this.model.get("text")).toEqual("");
	});

	it("should expose have a default truncatedText attribute", function() {
		expect(this.model.get("truncatedText")).toEqual("");
	});

	it("should not truncate string less than 140 characters", function() {
		expect(this.model.truncateText('Lorem ipsum dolor sit amet', 140)).toEqual("Lorem ipsum dolor sit amet");
	});

	it("should not truncate string equal to 140 characters", function() {
		expect(this.model.truncateText('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890', 140)).toEqual("12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890");
	});

	it("truncate string greater than 140 characters", function() {
		expect(this.model.truncateText('Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit ametx consectetur adipiscing elit Lorem ipsum dolor 133 zzz140 consectetur consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur', 140)).toEqual("Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit ametx consectetur adipiscing elit Lorem ipsum dolor 133 zzz140...");
	});

});

describe("PagerModel", function() {

	beforeEach(function() {
		this.model = new PagerModel();
	});

	it("should expose have a default linkHeader attribute", function() {
		expect(this.model.get("linkHeader")).toEqual("");
	});

	it("should expose have a default nextPage attribute", function() {
		expect(this.model.get("nextPage")).toEqual("");
	});

	it("should expose have a default prevPage attribute", function() {
		expect(this.model.get("prevPage")).toEqual("");
	});

	it("parseLinkHeader should return expected object", function() {
		var exampleHeader = '<https://example.com>; rel="next", <https://example2.com>; rel="last", <https://example3.com>; rel="first", <https://example4.com>; rel="prev"'

		var nextLink = this.model.parseLinkHeader(exampleHeader, 'next');
		expect(nextLink.url).toEqual("https://example.com");

		var firstLink = this.model.parseLinkHeader(exampleHeader, 'first');
		expect(firstLink.url).toEqual("https://example3.com");
	});

});

describe("CommentView", function() {

	beforeEach(function() {
		this.view = new CommentView();
	});

	it("should have expected className", function() {
		expect(this.view.className).toEqual("comment-item-view");
	});

});

describe("DetailedIssueMetaInfoView", function() {

	beforeEach(function() {
		this.view = new DetailedIssueMetaInfoView();
	});

	it("should have expected className", function() {
		expect(this.view.className).toEqual("detailed-issue-meta-info-view");
	});

});

describe("IssueMetaInfoView", function() {

	beforeEach(function() {
		this.view = new IssueMetaInfoView();
	});

	it("should have expected className", function() {
		expect(this.view.className).toEqual("issue-meta-info-view");
	});

});

describe("IssueView", function() {

	beforeEach(function() {
		this.view = new IssueView();
	});

	it("should have expected className", function() {
		expect(this.view.className).toEqual("issuelist-item-view");
	});

});

describe("LabelView", function() {

	beforeEach(function() {
		this.view = new LabelView();
	});

	it("should have expected className", function() {
		expect(this.view.className).toEqual("label-view");
	});

	it("should have expected tagName", function() {
		expect(this.view.tagName).toEqual("ul");
	});

});

describe("FullSummaryView", function() {

	beforeEach(function() {
		this.view = new FullSummaryView();
	});

	it("should have expected className", function() {
		expect(this.view.className).toEqual("full-summary-view");
	});

});

describe("ShortSummaryView", function() {

	beforeEach(function() {
		this.view = new ShortSummaryView();
	});

	it("should have expected className", function() {
		expect(this.view.className).toEqual("short-summary-view");
	});

});

describe("IssueListView", function() {

	beforeEach(function() {
		this.view = new IssueListView({
			parentSelector: 'foo'
		});
	});

	it("should have expected className", function() {
		expect(this.view.className).toEqual("issuelist-view");
	});

	it("should have a parentSelector attribute", function() {
		expect(this.view.parentSelector).toEqual("foo");
	});

});

describe("ReporterView", function() {

	beforeEach(function() {
		this.view = new ReporterView();
	});

	it("should have expected className", function() {
		expect(this.view.className).toEqual("reporter-view");
	});

});

describe("Utils", function() {

	it("Utils.colorConstrast should return white, when passed #0D0D0D", function() {
		expect(Utils.colorConstrast('0D0D0D')).toEqual('#FFFFFF');
	});

	it("Utils.colorConstrast should return black, when passed #EFEFEF", function() {
		expect(Utils.colorConstrast('EFEFEF')).toEqual('#000000');
	});

});
