
// current day is displayed at the top of the calendar 
 var currentDay = moment().format("dddd, MMMM Do YYYY")

$( "#currentDay" ).text(currentDay);

console.log(moment().format("dddd, MMMM Do YYYY"))