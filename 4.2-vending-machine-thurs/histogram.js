// Making a Histogram

	var para = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reiciendis obcaecati debitis, sint harum voluptatibus. Distinctio neque tempora nemo optio sed quis libero, id, fugit, minima, facilis totam laborum nisi ut officiis! Quas exercitationem laborum deserunt explicabo quasi veritatis veniam placeat. Quisquam ex dolores, provident odio quo possimus dicta molestias.";

	var histo = {};

	for (var i=0;i<para.length;i++) {
		var letter = para[i];
		
		if (histo[letter] === undefined) {
			histo[letter] = 1;
		} else { 
			histo[letter]++;
		}
	}

	console.log(histo);