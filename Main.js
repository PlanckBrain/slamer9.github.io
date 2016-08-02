// JavaScript File

//Global variables declaration
var whiteButton;
var BlueButton;
var tanButton;
var docBody;

$(document).ready(function() 
{
    whiteButton = $("#WButton");
    BlueButton = $("#BButton");
    tanButton = $("#TanButton");
    docBody =  $(document.body);
    
    whiteButton.on('click', function(){
        docBody.removeClass();
        docBody.addClass("White");
    });
    
    BlueButton.on('click', function(){
        docBody.removeClass();
        docBody.addClass("LBlue");
    });
    
    tanButton.on('click', function() {
       docBody.removeClass();
       docBody.addClass("Tan");
    });
});

