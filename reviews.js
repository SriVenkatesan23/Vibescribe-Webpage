
var main = function(){

	$('.button').click( function(){ 

		var title = prompt("Enter Title Of Article (Artist - Album): ");
		var cover = prompt("Enter Link To Album Cover: ");
		var link = prompt("Enter Link To Review File: ");


		$('.row').append('<figure class="col-sm-6"><p>' + title +  '</p><a href="'  + link +  '"><img src="' + cover +  '"></a></figure>');
	});

	

};

$(document).ready(main);