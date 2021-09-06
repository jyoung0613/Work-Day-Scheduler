// display current day
var currentDayFormat = moment().format("[Today is] dddd, MMMM Do YYYY")
$("#currentDay").html(currentDayFormat)

// Get from local storage
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));
$("#6 .description").val(localStorage.getItem("6"));
$("#7 .description").val(localStorage.getItem("7"));
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));

$(document).ready(function() {
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        console.log("click")

        localStorage.setItem(time, text)
    })
    
    function timER () {
        // Get current hour
        var timeStructure = moment().hour() 
        
        $(".time-block").each(function (){
            var timeSchedule = parseInt($(this)
            .attr("class")
            .split(" ")[1])
            console.log(timeSchedule)
            
            if (timeStructure < timeSchedule) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).removeClass("hour")
                $(this).addClass("future");
            } else if (timeStructure === timeSchedule) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).addClass("hour");
            } else if (timeStructure > timeSchedule) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).removeClass("hour");
                $(this).addClass("past");    
            }
        }
        )
    }
    timER()
})