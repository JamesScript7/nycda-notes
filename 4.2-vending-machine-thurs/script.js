// var para = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis obcaecati debitis, sint harum voluptatibus. Distinctio neque tempora nemo optio sed quis libero, id, fugit, minima, facilis totam laborum nisi ut officiis! Quas exercitationem laborum deserunt explicabo quasi veritatis veniam placeat. Quisquam ex dolores, provident odio quo possimus dicta molestias.";

// var histo = {};

// for (var i=0;i<para.length;i++) {
// 	var letter = para[i];
// 	if (histo[letter] === undefined) {
// 		histo[letter] = 1;
// 	} else { 
// 		histo[letter]++;
// 	}
// }

// console.log(histo);

//accept coins
//keep track of how much money we recieved
//keep track of how much things cost
//vend item IF we put in enough $
//return extra change if necessary

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



















