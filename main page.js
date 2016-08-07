var main = function() {



$(".dropdown-menu").hide();

  $(".menu").click(function() {
  	
    $(this).find(".dropdown-menu").toggle();
    $(this).find(".dropdown-menu").animate( {
    	
    left:"512px"

    }, 0);

  });



};

$(document).ready(main);