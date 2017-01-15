describe("Rectangle", function() {
	var rect = new Rectangle(5,10);
	describe("findArea()", function() {
		// var rect = new Rectangle(5,10);
		it("Should return width times height", function() {
			expect(rect.findArea()).toBe(50);
		});
	})
	
	describe("findPerimeter()", function() {
		// var rect = new Rectangle(5,10);
		it("Should return width plus height", function() {
			expect(rect.findPerimeter()).toBe(30);
		});
	})
});