$(document).ready(function() {

  var data = moment("01/01/2018", "DD-MM-YYYY");
  console.log(data);



  for (var i = 1; i<=31; i++) {
    var source = $("entry-template").html();
    var template = Handlebars.compile(source);

    var startDate = {
      "date": "2018-01-01",
    }

    var html = template(startDate);
  }
  startDate.date()
})
