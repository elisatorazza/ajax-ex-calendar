$(document).ready(function() {

  var date = moment("01-01-2018", "DD-MM-YYYY");

  for (var i = 1; i<=date.daysInMonth(); i++) {

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var startDate = {
      "day" : i,
      "month" : date.format("MMMM"),
      "year" : 2018,
    }
    var html = template(startDate);
    
    $(".date-list").append(html);
    $.ajax (
      {
       "url": "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
       "method": "GET",
       "success": function (data, stato){
        if (data["response"].date == startDate) {
          $(".day").addClass("holiday");
        }
       }
    }
    )
  }



})
