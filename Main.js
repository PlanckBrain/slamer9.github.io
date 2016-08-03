// JavaScript File

//Global variables declaration
var lightButton;
var blueButton;
var tanButton;
var darkButton;
var docBody;

$(document).ready(function() 
{
    lightButton = $("#LButton");
    blueButton = $("#BButton");
    tanButton = $("#TanButton");
    darkButton = $("#DarkButton");
    docBody =  $(document.body);
    
    lightButton.on('click', function(){
        docBody.removeClass();
        docBody.addClass("Light");
    });
    
    blueButton.on('click', function(){
        docBody.removeClass();
        docBody.addClass("Blue");
    });
    
    tanButton.on('click', function() {
       docBody.removeClass();
       docBody.addClass("Tan");
    });
    
    darkButton.on('click', function() {
        docBody.removeClass();
        docBody.addClass("Dark");
    })
});

