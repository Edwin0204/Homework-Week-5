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
  $("#btn10").click(function() {
    var am10 = $('#10').val();
    localStorage.setItem('10am', am10);
  });
  $("#btn11").click(function() {
    var am11 = $('#11').val();
    localStorage.setItem('11am', am11);
  });
  $("#btn12").click(function() {
    var pm12 = $('#12').val();
    localStorage.setItem('12pm', pm12);
  });
  $("#btn13").click(function() {
    var pm13 = $('#13').val();
    localStorage.setItem('13pm', pm13);
  });
  $("#btn14").click(function() {
    var pm14 = $('#14').val();
    localStorage.setItem('14pm', pm14);
  });
  $("#btn15").click(function() {
    var pm15 = $('#15').val();
    localStorage.setItem('15pm', pm15);
  });
  $("#btn16").click(function() {
    var pm16 = $('#16').val();
    localStorage.setItem('16pm', pm16);
  });
  $("#btn17").click(function() {
    var pm17 = $('#17').val();
    localStorage.setItem('17pm', pm17);
  });
  var act8 = localStorage.getItem('8am');
  $('#8').val(act8);
  var act9 = localStorage.getItem('9am');
  $('#9').val(act9);
  var act10 = localStorage.getItem('10am');
  $('#10').val(act10);
  var act11 = localStorage.getItem('11am');
  $('#11').val(act11);
  var act12 = localStorage.getItem('12pm');
  $('#12').val(act12);
  var act13 = localStorage.getItem('13pm');
  $('#13').val(act13);
  var act14 = localStorage.getItem('14pm');
  $('#14').val(act14);
  var act15 = localStorage.getItem('15pm');
  $('#15').val(act15);
  var act16 = localStorage.getItem('16pm');
  $('#16').val(act16);
  var act17 = localStorage.getItem('17pm');
  $('#17').val(act17);
});

hours();
setInterval(displayTime);