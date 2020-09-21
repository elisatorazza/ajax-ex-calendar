$(document).ready(function() {

  var date = moment("01-01-2018", "DD-MM-YYYY");
  var month = date.month();
  var monthInLetter = moment().month(month).format("MMMM");
  console.log("init data:" + date.format("YYYY-MM-DD"));
  var startMonth = printCalendar(date);
  var startHoliday = printHoliday (date);
  console.log("init data:" + date.format("YYYY-MM-DD"));
  var dateInit = moment("01-01-2018", "DD-MM-YYYY");

//Al click su successivo, vediamo il mese successivo
$(".next").click(function (){
 if (month==11) {
   alert("Impossibile verificare calendario successivo");
 } else {
   $(".date-list").empty();
   var newDate = dateInit.add (1, "months");
   dateInit = moment(newDate);
   month = newDate.month();
   printCalendar (newDate);
   printHoliday (newDate);
 }
});

//Al click su precedente
$(".previous").click(function (){
 if (month === 0) {
   alert("Impossibile verificare calendario precedente");
 } else {
   $(".date-list").empty();
   var newDate = dateInit.subtract (1, "months");
   console.log(newDate);
   dateInit = moment(newDate);
   month = newDate.month();
   printCalendar (newDate);
   printHoliday (newDate);
 }

});

// funzione per stampare il calendario//
function printCalendar (datePrint) {
  var daysInMonth = datePrint.daysInMonth();

  $("h1").text(moment().month(month).format("MMMM"));

  for (var i = 1; i<=daysInMonth; i++) {

      var source = $("#entry-template").html();
      var template = Handlebars.compile(source);

      var startDate = {
        "day" : i,
        "month" : datePrint.format("MMMM"),
        "year" : 2018,
        "dateComplete": datePrint.format("YYYY-MM-DD")
      };

      var html = template(startDate);
      $(".date-list").append(html);
      datePrint.add(1, "day");

      }
  }

//funzione per stampare le festività//
  function printHoliday (datePrint) {
    $.ajax (
      {
       "url": "https://flynn.boolean.careers/exercises/api/holidays",
       "data": {
         "year":2018,
         "month": month
       },
       "method": "GET",
       "success": function (data){
        for (var i = 0; i<data.response.length; i++){
          var holiday = data.response[i].date;
          var holidayName =  data.response[i].name;
          $(".day[data-attribute='"+holiday+"']").addClass("holiday");
          $(".day[data-attribute='"+holiday+"'] .holiday-type").text(holidayName);
          }
          }
      });
    }
    }
  );
