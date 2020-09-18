$(document).ready(function() {


  for (var i = 1; i<=31; i++) {

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var startDate = {
      "day" : i,
      "month" : "January",
      "year" : 2018,
    }
    var html = template(startDate);
    $(".date-list").append(html);
  }

})
