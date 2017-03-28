var request = require('superagent');

// const url = "https://www.reddit.com/dev/api/"
// const url = "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json"

// const url = "https://www.omdbapi.com/?t=Batman"
const url = "https://www.omdbapi.com/"


request
	.get(url)
	.query({title: "interstellar"})
	.end(function(err,res) {
		if(err || !res.ok) {
			console.log("You got an: " + err.toString());
		} else {
			console.log(res.body);
		}
	})