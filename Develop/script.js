var timeDisplayEl = $('#time-display');

function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY');
  timeDisplayEl.text(rightNow);
}

function hours(){

  var time = new Date();
  var currentHour = time.getHours();

  for (var i = 8; i < 18; i++) {
    if (i < currentHour) {
      document.getElementById(i.toString()).classList.add('past');
    } else if (i === currentHour) {
      document.getElementById(i.toString()).classList.add('present');
    } else if (i > currentHour) {
      document.getElementById(i.toString()).classList.add('future');
    }
  }
}

jQuery(function(){
  $("#btn8").click(function() {
    var am8 = $('#8').val();
    localStorage.setItem('8am', am8);
  });
  $("#btn9").click(function() {
    var am9 = $('#9').val();
    localStorage.setItem('9am', am9);
  });
  var act8 = localStorage.getItem('8am');
  $('#8').val(act8);
  var act9 = localStorage.getItem('9am');
  $('#9').val(act9);
});

hours();
setInterval(displayTime);