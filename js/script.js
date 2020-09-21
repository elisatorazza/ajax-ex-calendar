$(document).ready(function() {

  var date = moment("01-03-2018", "DD-MM-YYYY");
  var month = date.month();
  printCalendar (date);
  printHoliday (date);

function printCalendar (date) {
  var daysInMonth = date.daysInMonth();


  var monthInLetter = moment().month(month).format("MMMM");

  $("h1").text(moment().month(month).format("MMMM"));

  for (var i = 1; i<=daysInMonth; i++) {

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var startDate = {
      "day" : i,
      "month" : date.format("MMMM"),
      "year" : 2018,
      "dateComplete": date.format("YYYY-MM-DD"),
    }

    var html = template(startDate);

    $(".date-list").append(html);
    date.add(1, "day");
    }
  }


  function printHoliday (holiday) {
    $.ajax (
      {
       "url": "https://flynn.boolean.careers/exercises/api/holidays",
       "data": {
         "year":2018,
         "month": month,
       },
       "method": "GET",
       "success": function (data, stato){
        for (var i = 0; i<data["response"].length; i++){
          var holiday = data["response"][i].date;
          var holidayName =  data["response"][i].name;
          $(".day[data-attribute='"+holiday+"']").addClass("holiday");
          $(".day[data-attribute='"+holiday+"'] .holiday-type").text(holidayName);
          }
          }
      });
    }
    }
    )
