// Define universal variables
var saveButton = $(".saveButton");

// current day is displayed at the top of the calendar
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// colour coding tasks in hour blocks that are coming up 
function timeColour() {
    var officeHours = moment().hours();

    $(".time-block").each(function() {
        var rightNow = parseInt($(this).attr("id"));

        if (rightNow > officeHours) {
            $(this).addClass("upcoming");
        } else if (rightNow === officeHours) {
            $(this).addClass("due");
        } else {
            $(this).addClass("overDue");
        }
    })
};


// save tasks that have been entered
saveButton.on("click", function() {
    var time = $(this).siblings(".task-container").text();
    var task = $(this).siblings(".agenda").val();
    localStorage.setItem(time, task);
});

// Loading tasks that have been saved
function runAgenda() {
    $(".task-container").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);
        if(currPlan !== null) {
            $(this).siblings(".agenda").val(currPlan);
        }
    });
}




// running the functions

timeColour();
runAgenda();