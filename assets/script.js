var currentTime = dayjs().hour();
const saveButton = $(".saveBtn");

saveButton.on("click", function() {
const description = $('.description').val();

localStorage.setItem(this.parentElement.id, description);
});

const mapHours = function (currentTime) {
  $(".time-block").each(function() {
    let planner = parseInt( $(this).attr("id").split("-")[1])

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

  mapHours(currentTime);