// Look at CSS "on hover" and "on click"

//Global constant declaration
const slideTimeMed = 300;
const slideTimeFast = 200;
const slideTimeInstant = 0;

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
var currentPage;


$(document).ready(function() //Things to do when document loads.

{
    lightButton = $("#LButton");
    blueButton = $("#BButton");
    tanButton = $("#TanButton");
    darkButton = $("#DarkButton");
    
    homeButton = $("#HButton");
    portfolioButton = $("#PButton");
    resumeButton = $("#RButton");
    
    currentPage = $("#currentPage");
    
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
    
    homeButton.on('click', homeTab);
    portfolioButton.on('click', portfolioTab);
    resumeButton.on('click', resumeTab);
    
    homeTab(); //So it defaults to changing to the home tab when the page loads.
}); //End doc.ready function


//Function declaration
function homeTab() {
    portfolioButton.removeClass();
    resumeButton.removeClass();
    homeButton.addClass("Selected");
    
    currentPage.slideUp(slideTimeInstant);
        
    if(home == null)
    {
        $.get('home.html', function(response){
                home = response;
                currentPage.html(home).slideDown(slideTimeFast);
            });
    } else
    {
    currentPage.html(home).slideDown(slideTimeMed);
    }
}

function portfolioTab() {
    homeButton.removeClass();
    resumeButton.removeClass();
    portfolioButton.addClass("Selected");
    
    currentPage.slideUp(slideTimeInstant);
    
    if(portfolio == null)
    {
        $.get('portfolio.html', function(response){
                portfolio = response;
                currentPage.html(portfolio).slideDown(slideTimeFast);
            });
    } else
    {
    currentPage.html(portfolio).slideDown(slideTimeMed);
    }
}

function resumeTab() {
    homeButton.removeClass();
    portfolioButton.removeClass();
    resumeButton.addClass("Selected");
    
    currentPage.slideUp(slideTimeInstant);
    
    if(resume == null)
    {
        $.get('resume.html', function(response){
                resume = response;
                currentPage.html(resume).slideDown(slideTimeFast);
            });
    } else
    {
    currentPage.html(resume).slideDown(slideTimeMed);
    }
}


