// ==UserScript==
// @name         Tangorin Cleaner
// @namespace    tangorin.cleaner
// @description  Cleans up Tangorin.com
// @author       Alex
// @match        http://tangorin.com/*
// @grant        none
// @require    http://code.jquery.com/jquery-latest.pack.js
// ==/UserScript==

$("#dictPanel").hide();

$("header").hide();

$("footer").hide();

$(".results-footer").hide();

$(".footer-hr").hide();

$("body").css({"padding-top":"0.5em"});

$("#dictContent").css({"padding-right":"0"});