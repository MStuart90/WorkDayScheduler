
// current day is displayed at the top of the calendar 
 var currentDay = moment().format("dddd, MMMM Do YYYY")

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
