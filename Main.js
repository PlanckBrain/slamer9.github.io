// JavaScript File

//Global variables declaration
var lightButton;
var blueButton;
var tanButton;
var darkButton;
var docBody;
var homeButton;
var portfolioButton;
var resumeButton;

$(document).ready(function() 
{
    lightButton = $("#LButton");
    blueButton = $("#BButton");
    tanButton = $("#TanButton");
    darkButton = $("#DarkButton");
    
    homeButton = $("#HButton");
    portfolioButton = $("#PButton");
    resumeButton = $("RButton");
    
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
    });
    
    homeButton.on('click', function() {
        portfolioButton.removeClass();
        resumeButton.removeClass();
        homeButton.addClass("Selected");
    });
    
    portfolioButton.on('click', function() {
        homeButton.removeClass();
        resumeButton.removeClass();
        portfolioButton.addClass("Selected");
    });
    
    resumeButton.on('click', function() {
        homeButton.removeClass();
        portfolioButton.removeClass();
        resumeButton.addClass("Selected");
    });
}); //End doc.ready function

