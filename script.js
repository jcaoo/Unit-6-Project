$(".stayImage").hide();
$(".door").hide();
$(".sevenDwarves").hide();
$(".witch").hide();
$(".wqueen").hide();
$(".next").hide();
$(".nextTwo").hide();
$(".accept").hide();
$(".deny").hide();
$(".reset").hide();
$(".denyed").hide();
$(".accepted").hide();

//If user chooses SW to stay
$(".stay-button").click(function(){
    $(".stayImage").show();
    $(".firstImage").hide();
    $(".title").hide();
    $(".stay-button").hide();
    $(".run-button").hide();
});

//If user chooses SW to run
$(".run-button").click(function(){
    $(".door").show();
    $(".firstImage").hide();
    $(".title").hide();
    $(".stay-button").hide();
    $(".run-button").hide();
    
});
//User dblclicks on door and sevenDwarves img shows 
$(".door").dblclick(function(){
    $(".sevenDwarves").show();
   	$(".door").hide(); 
    $(".next").show();
   
});
//sevendwarves img should disappear after click
$(".next").click(function(){
    $(".witch").show();
	$(".sevenDwarves").hide();
    $(".next").hide();
});
//user hovers over witch image to see wicked queen
$(".witch").mouseleave(function(){
    $(".wqueen").show();
});
$(".wqueen").mouseenter(function(){
    $(".witch").hide();
    $(".accept").show();
    $(".deny").show();
});

//accept or deny apple
$(".witch").click(function(){
    $(".accept").show();
    $(".deny").show();
});
//if accept, sw dies
$(".accept").click(function(){
    $(".accepted").show();
    $(".witch").hide();
    $(".wqueen").hide();
    $(".deny").hide();
    $(".accept").hide();
});
//if deny, sw lives happily ever after
$(".deny").click(function(){
    $(".denyed").show();
    $(".witch").hide();
    $(".wqueen").hide();
    $(".accept").hide();
    $(".deny").hide();
    
});









