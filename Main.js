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
        
        lightButton.addClass("Selected");
        blueButton.removeClass();
        tanButton.removeClass();
        darkButton.removeClass();
    });
    
    blueButton.on('click', function(){
        docBody.removeClass();
        docBody.addClass("Blue");
        
        lightButton.removeClass();
        tanButton.removeClass();
        darkButton.removeClass();
        blueButton.addClass("Selected");
    });
    
    tanButton.on('click', function() {
       docBody.removeClass();
       docBody.addClass("Tan");
       
        lightButton.removeClass();
        blueButton.removeClass();
        darkButton.removeClass();
        tanButton.addClass("Selected");
    });
    
    darkButton.on('click', function() {
        docBody.removeClass();
        docBody.addClass("Dark");
        
        lightButton.removeClass();
        blueButton.removeClass();
        tanButton.removeClass();
        darkButton.addClass("Selected");
    })
});

