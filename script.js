
// current day is displayed at the top of the calendar 
 var currentDay = moment().format("dddd, MMMM Do YYYY")
 var hour = moment().hours();
//  Uses the Moment.js library to work with date and time
 function getDate(){
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
};


$( "#currentDay" ).text(currentDay);

console.log(moment().format("dddd, MMMM Do YYYY"))


function colorSchedule(){
    $("input").each(function(){
        var rowHour = $(this).attr("id");
        var rowNumber = parseInt(rowHour);
        if (rowNumber === hour){
            $(this).addClass("present");
        } else if (rowNumber < hour){
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        };
    });
};

