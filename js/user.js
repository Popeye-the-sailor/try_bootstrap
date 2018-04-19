"use strict";

var go = document.getElementById("goup"),
		t;

// go.addEventListener('click', up);

function up(){
	var top =Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	
	if (top > 0) {
		window.scrollBy(0, (top)/-10);
		t = setTimeout('up()', 50);
	} else 
		clearTimeout(t);
		return false;
}

