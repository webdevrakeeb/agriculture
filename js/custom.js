$(document).ready(function(){
    $(".our_nav").slicknav({
        "prependTo":"nav"
    });
    $('.box1').circleProgress({
		value: .98,
		size: 120,
		fill: "#000"
	});
	$('.box2').circleProgress({
		value: .95,
		size: 120,
		fill: "#014d2c"
	});
	$('.box3').circleProgress({
		value: .90,
		size: 120,
		fill: "blue"
	});
	$('.box4').circleProgress({
		value: .87,
		size: 120,
		fill: "red"
	});	
	$('.box5').circleProgress({
		value: .75,
		size: 120,
		fill: "#5c3001"
	});
    $('.box6').circleProgress({
		value: .82,
		size: 120,
		fill: "#5d27a1"
	});
    $('.box7').circleProgress({
		value: .65,
		size: 120,
		fill: "#997b2f"
	});
	$('body').materialScrollTop();

});