//Triangle Numbers

//Using for loop:

// function TriNum(x) {
// 	var result = 0;
// 	for(var i=x; i > 0; i--) {
// 		result += i;
// 	}
// 	return result;
// }

// console.log(TriNum(100));

//Using a While loop:



//Using recursive (it's good for dealing with sequential numbers)

// function recursiveTri(x) {
// 	//first set up a stop method
// 	if (x < 0) {
// 		return -1;
// 	} else if (x == 0) {
// 		return 1;
// 	} else {
// 		return (x + recursiveTri(x - 1));
// 	};
// }

// console.log(recursiveTri(100));

// function capFirst(x) {
// 	return x.toUpperCase() + x.slice(1);
// }

// capFirst("hello");





// function capFirst(x) {
// 	return x.toUpperCase().charAt(0) + x.slice(1);
// }

// capFirst("wooooHOOO");

// function capEveryFirst(x) {
// 	var xArr = x.split('');
// 	var result = [];
// 	for (var i=0; i<xArr.length; i++) {
// 		result.push(x[i]);
// 		if (x[i] == ' ') {
// 			result.push(x[i + 1].toUpperCase());
// 		}
		
// 	}
// 	return result;
// }

// capEveryFirst("why hello there.");

// var para = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus tempora voluptate aspernatur dicta, laboriosam magnam ipsam neque repudiandae? Accusamus corporis quaerat exercitationem dolores ea enim soluta odit, deleniti, ullam. Neque, necessitatibus dolore ipsam quisquam rerum velit perspiciatis dolorum blanditiis, temporibus ipsum eaque ut quam culpa repudiandae magnam molestias at provident perferendis consectetur excepturi assumenda illo animi. Dignissimos, voluptatibus. Possimus unde suscipit eaque veniam obcaecati ut, ab veritatis est iusto explicabo expedita tenetur deleniti iste repudiandae optio quidem minus illum aperiam maxime, minima alias, excepturi assumenda? Vel praesentium, neque nobis nisi non consequuntur quas beatae ex, vitae, voluptate pariatur blanditiis?";

// // finding how many letters there are:


// var para = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus tempora voluptate aspernatur dicta, laboriosam magnam ipsam neque repudiandae? Accusamus corporis quaerat exercitationem dolores ea enim soluta odit, deleniti, ullam. Neque, necessitatibus dolore ipsam quisquam rerum velit perspiciatis dolorum blanditiis, temporibus ipsum eaque ut quam culpa repudiandae magnam molestias at provident perferendis consectetur excepturi assumenda illo animi. Dignissimos, voluptatibus. Possimus unde suscipit eaque veniam obcaecati ut, ab veritatis est iusto explicabo expedita tenetur deleniti iste repudiandae optio quidem minus illum aperiam maxime, minima alias, excepturi assumenda? Vel praesentium, neque nobis nisi non consequuntur quas beatae ex, vitae, voluptate pariatur blanditiis?";

// var letterCount = {};

// function countEm (letter) {
// 	letterCount.letter = 0;
// 	var letterCounter = 0;
// 	for (var i=0;i<para.length;i++) {
// 		letterCounter += 1;
// 		if (para[i].toLowerCase() === letter.toLowerCase()) {
// 			letterCount.letter += 1;
// 		}
// 	}
// 	return "The paragraph contains " + letterCount.letter + " \"" + letter + "\" " + "out of " + letterCounter + " total letters.";
// }

// countEm("a");







