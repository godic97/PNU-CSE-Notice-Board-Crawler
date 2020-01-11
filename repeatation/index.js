var express = require("express");
var n = 0;
function f1(){
	console.log(n);
}

setInterval(f1, 5000);
