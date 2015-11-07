//$ means we want to access jquesry first
//this check is this page loads completetly
$(document).ready(function()
{
//todo

$("img").click(function(){
    alert("You entered p1!");
});





	$("img").click(function(){
		    $(this).animate({left: '250px'});
		});//end 

	$(".happen").click(function()
	{
	  	//$(this).hide();
	});


	$("h2").click(function()
	{
	    $(this).css("background-color", "#ffffff");
	});//end


	$("h1").click(function(){
	    $(this).fadeOut("slow").fadeIn();
	    
	});//end


	 $("img").click(function(){
	    $(this).animate({left: '250px'});
	});//end 


	$("button").click(function(){
	    $("div").animate({
	        left: '250px',
	        opacity: '0.5',
	        height: '150px',
	        width: '150px'
	    });
	}); //end
	
   
//each div to have different id
//handlebar.js

	$("button").click(function(){
	    $("div").hide("slow", function(){
	        alert("Oops you crashed the system\n Fixed it ");
	    });
	});//end


	$("#slideUp").click(function(){
		 $("#slideUp" ).slideUp( 800 );
	        
	    });// end
	    


	$("h3").click(function(){
	        $(this).attr({
	            "href" : "http://www.facebook.com/dommyi",
	            "title" : "facebook"
	        });
	    });

});