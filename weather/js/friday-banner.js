
  var weekday = new Array(7);

  
  weekday[5] = "Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";

  var currentDate = new Date();
  weekdayValue = currentDate.getDay();

  document.write(
      weekday[weekdayValue]
  );
