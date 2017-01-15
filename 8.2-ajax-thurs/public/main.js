$(function() {
		//Daniel doesn't use .load often
		// $(".header").load("header.html");
		// $(".message").load("message.html");
		
		// $("a.load-date").on("click", function() {
		// 	$.get("/users/123", function(response) {
		// 		$(".message").html(response);
		// 	});
		// })

		// $("a.load-date").on("click", function() {
		// 	$.get("/users/456", function(response) {
		// 		$(".message").html(response);
		// 	});
		// })

		// $("a.load-user").on("click", function() {
		// 	var userID = $(this).data("data-user-id");

		// 	var userData = /"users"/ + userId;

		// 	$.get(url, function(response) {
		// 		$(".message").html(response);
		// 	});
		// });


		// $.get("/stooges", function(response) {
		// 	console.log(response);
		// 	$(".stooges").html(reponse);
		// });

		$("a.list").on("click", function() {
			$.get("/lists", function(response) {
				$(".message").html(response);
			})
		} )

		$("a.list").on("click", function() {
			$.get("/lists", function(response) {
				$(".message").html(response);
			})
		} )

	});














