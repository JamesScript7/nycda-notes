// Finding how many letters there are:

	var para = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus tempora voluptate aspernatur dicta, laboriosam magnam ipsam neque repudiandae? Accusamus corporis quaerat exercitationem dolores ea enim soluta odit, deleniti, ullam. Neque, necessitatibus dolore ipsam quisquam rerum velit perspiciatis dolorum blanditiis, temporibus ipsum eaque ut quam culpa repudiandae magnam molestias at provident perferendis consectetur excepturi assumenda illo animi. Dignissimos, voluptatibus. Possimus unde suscipit eaque veniam obcaecati ut, ab veritatis est iusto explicabo expedita tenetur deleniti iste repudiandae optio quidem minus illum aperiam maxime, minima alias, excepturi assumenda? Vel praesentium, neque nobis nisi non consequuntur quas beatae ex, vitae, voluptate pariatur blanditiis?";
	var letterCount = {};

	function countEm (letter) {
		letterCount.letter = 0;
		var letterCounter = 0;

		for (var i=0;i<para.length;i++) {
			letterCounter += 1;

			if (para[i].toLowerCase() === letter.toLowerCase()) {
				letterCount.letter += 1;
			}
		}
		
		return "The paragraph contains " + letterCount.letter + " \"" + letter + "\" " + "out of " + letterCounter + " total letters.";
	}

	countEm("a");







