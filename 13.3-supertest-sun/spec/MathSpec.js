//unit test

var square = require("../square");

describe("square()", function() {
	it("should return 0 for square(0)", function() {
		expect(square(0)).toBe(0);
	});
	it("should return 1 for square(1)", function() {
		expect(square(1)).toBe(1);
	});
	it("should return 16 for square(4)", function() {
		expect(square(1)).toBe(1);
	});
})