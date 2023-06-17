var currentTime = dayjs().hour();
const saveButton = $(".saveBtn");

const savedHistory = function () {
  $(".time-block").each(function() {
  var savedData = localStorage.getItem($(this).attr("id"));
  $(this).children(".description").val(savedData);
  })
};

const mapHours = function (currentTime) {
  $(".time-block").each(function() {
    let planner = parseInt( $(this).attr("id").split("-")[1]);

    saveButton.on("click", function() {
      const description = $(this).siblings(".description").val();
      console.log(description);
      localStorage.setItem(this.parentElement.id, description);
      });

    if (planner < currentTime){
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }else if(planner === currentTime){
      $(this).removeClass("past");
      $(this).addClass("present");
    } else{
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }

  })
  
    var today = dayjs().format('dddd, MMMM D, YYYY'); 
    $('#currentDay').text(today); 
  };
  savedHistory();
  mapHours(currentTime);