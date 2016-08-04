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
var home;
var portfolio;
var resume;

$(document).ready(function() 
{
    lightButton = $("#LButton");
    blueButton = $("#BButton");
    tanButton = $("#TanButton");
    darkButton = $("#DarkButton");
    
    homeButton = $("#HButton");
    portfolioButton = $("#PButton");
    resumeButton = $("#RButton");
    
    home = $("#HomeDiv");
    portfolio = $("#PortfolioDiv");
    resume = $("#ResumeDiv");
    
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
        
        home.removeClass("hide");
        portfolio.addClass("hide");
        resume.addClass("hide");
    });
    
    portfolioButton.on('click', function() {
        homeButton.removeClass();
        resumeButton.removeClass();
        portfolioButton.addClass("Selected");
        
        portfolio.removeClass("hide");
        home.addClass("hide");
        resume.addClass("hide");
    });
    
    resumeButton.on('click', function() {
        homeButton.removeClass();
        portfolioButton.removeClass();
        resumeButton.addClass("Selected");
        
        resume.removeClass("hide");
        home.addClass("hide");
        portfolio.addClass("hide");
    });
}); //End doc.ready function

