jQuery(document).ready(function($) {

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

// ---- INTRO TWEEN & PARALLAX -------- //
   var wh = window.innerHeight,
    $bubbleMdd = $('.bubbleMdd'),
    $bubbleWasist = $('.bubbleWasist'),
    $bubbleWaskann = $('.bubbleWaskann'),
    $bubbleWasspricht = $('.bubbleWasspricht'),
    $bubbleWiefunk = $('.bubbleWiefunk'),
    $bubbleWo = $('.bubbleWo'),
    $bubbleST = $('.bubbleStudiereTechnik'),
    $bubbleAusland = $('.bubbleAusland'),
    $bubbleBewerbung = $('.bubbleBewerbung'),
    $bubbleWassagen = $('.bubbleWassagen');

var bubblesTween = new TimelineMax();
bubblesTween
    .from($bubbleMdd, 1.5, {autoAlpha:0, ease: Power4.easeInOut}, '0')
    .from($bubbleWaskann, 5, {top: 2000, autoAlpha:0, ease: Power4.easeInOut}, '0.2')
    .from($bubbleWasspricht, 6, {top: 2000, autoAlpha:0, ease: Power4.easeInOut}, '1.8')
    .from($bubbleWasist, 4, {top: 2000, autoAlpha:0, sease: Power4.easeInOut}, '1.7')
    
    .from($bubbleWassagen, 6, {top: 2000, autoAlpha:0, ease: Power4.easeInOut}, '3.9')
    .from($bubbleWiefunk, 10, {top: 2000, autoAlpha:0, ease: Power4.easeInOut}, '2.9')
    .from($bubbleWo, 8, {top: 2000, autoAlpha:0, ease: Power4.easeInOut},'3.3')
    .from($bubbleST, 7, {top: 2000, autoAlpha:0, ease: Power4.easeInOut},'3')
    .from($bubbleBewerbung, 12, {top: 2000, autoAlpha:0, ease: Power4.easeInOut}, '2.7')
    .from($bubbleAusland, 11, {top: 2000, autoAlpha:0, ease: Power4.easeInOut}, '0');
  
    var windowWidth = $(window).width();
    $(window).resize(function(){
        if ($(window).width() != windowWidth) {
            windowWidth = $(window).width();
            setTimeout(function(){window.location.reload();},.1);
        }
    });

});

