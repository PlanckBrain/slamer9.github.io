// JavaScript File

//Global constant declaration
const slideTimeMed = 300;
const slideTimeFast = 200;

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

function homeStart() {
    portfolioButton.removeClass();
    resumeButton.removeClass();
    homeButton.addClass("Selected");
    
    currentPage.slideUp(0);
        
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

$(document).ready(function() 
{
    lightButton = $("#LButton");
    blueButton = $("#BButton");
    tanButton = $("#TanButton");
    darkButton = $("#DarkButton");
    
    homeButton = $("#HButton");
    portfolioButton = $("#PButton");
    resumeButton = $("#RButton");
    
    //home = $("#HomeDiv");
    //portfolio = $("#PortfolioDiv");
    //resume = $("#ResumeDiv");
    
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
    
    
    homeButton.on('click', homeStart);
    
    portfolioButton.on('click', function() {
        homeButton.removeClass();
        resumeButton.removeClass();
        portfolioButton.addClass("Selected");
        
        currentPage.slideUp(0);
        
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
    });
    
    resumeButton.on('click', function() {
        homeButton.removeClass();
        portfolioButton.removeClass();
        resumeButton.addClass("Selected");
        
        currentPage.slideUp(0);
        
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
    });
    
    homeStart();
}); //End doc.ready function
