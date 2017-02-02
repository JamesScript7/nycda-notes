// Vending Machine Function

// Psuedo code practice:
// Accept coins
// Keep track of how much money we recieved
// Keep track of how much things cost
// Vend item IF we put in enough $
// Return extra change if necessary

	var vendingMachine = {
		"selections": {
			"cola": 0.85,
			"ginger ale": 0.65,
			"iced tea": 1.10
		},
		"price": 0.75,
		"total": 0,
		"addMoney": function(amount) {
			//vendingMachine.total += amount;
			this.total += amount;
		},
		"vendItem": function() {
			console.log("coming right up!")
		},
		"makeSelection": function() {
			if (this.total < this.price) {
				console.log("need more $$$");
			} else {
				vendItem();

			if (this.total > this.price) {
				var change = this.total - this.price;
				console.log("returning: " + change);
				}
			}
		}
	};

	// vendingMachine.giveChange = function() {};

	vendingMachine.addMoney(.10);
	vendingMachine.makeSelection();
	vendingMachine.addMoney(.50);
	vendingMachine.makeSelection();




