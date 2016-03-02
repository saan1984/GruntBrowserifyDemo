require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"arithmetics":[function(require,module,exports){
exports.addition = function (a, b) {
	return a + b;
}

exports.subtraction = function (a, b) {
	return a - b;
}

exports.multiplication = function (a, b) {
	return a * b;
}

exports.division = function (a, b) {
	return a / b;
}
},{}]},{},[]);

var arithmetics = require('arithmetics');
var doAddition = function(){
   var value1 = document.getElementById("number1").value,
       value2 = document.getElementById("number2").value,
       result = document.getElementById("result"),
       number1 = parseInt(value1, 10),
       number2 = parseInt(value2, 10);
    console.log(arithmetics.addition(number1, number2));
    result.value= arithmetics.addition(number1, number2)
};
