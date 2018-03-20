  var pos = $('#center').position(),
    radiusSat = $('#sat1').width() * 0.5,
    radius = $('#center').width() * 0.5,
    cx = pos.left + radius,
    cy = pos.top + radius,
    x, y,
    angle = 272.4,
    angles = [],
    spc = 270,
    deg2rad = Math.PI / 180,
    i = 0;
  var counter = 60;
  var minutes = 25;

  angles.push(angle);
  angle += spc;


  /// space out radius
  radius += (radiusSat - 20);




  function loop(trigger) {
    pos = $('#center').position();
    $('#center').css("left", $("body").width() / 2 - 125);

    cx = pos.left + radius;
    cy = pos.top + radius;

    angle = angles[0];

    x = cx + radius * Math.cos(angle * deg2rad);
    y = cy + radius * Math.sin(angle * deg2rad);

    $('#sat1').css({
      left: x - radiusSat,
      top: y - radiusSat
    });

    angles[0] = angles[0] - 0.3;
    if (angles[0] < -360) angles[0] = 0;
  }







  var counter = 60;
  var minutes = 25;
  var seconds = document.getElementById('seconds');
  var minutesID = document.getElementById('minutes');

  var interval = 1;
  var secInterval = 2;
  var started = false;

  function startAll() {
    if (started == false) {
      started = true;
      interval = setInterval(loop, 50);
      secInterval = setInterval(() => {
        if (counter >= 1) {
          counter--;
        } else {

          if (minutes == 0) {
            counter = 0;
            minutes = 0;
          } else {
            counter = 59;
            minutes--;
          }
        };

        seconds.textContent = counter;
        minutesID.textContent = minutes;


        pos = $('#center').position();
        cx = pos.left + radius;
        cy = pos.top + radius;

        $('#sat' + i).css({
          left: x - radiusSat,
          top: y - radiusSat
        });
      }, 1000);
    }

  }

  function stopAll() {
    started = false;
    clearInterval(interval);
    clearInterval(secInterval);
  }



  function resetAll() {
    pos = $('#center').position();
    radiusSat = $('#sat1').width() * 0.5;
    radius = $('#center').width() * 0.5;
    cx = pos.left + radius;
    cy = pos.top + radius;

    angle = 272.4;
    angles = [];
    spc = 270;
    deg2rad = Math.PI / 180;
    i = 0;
    counter = 60;
    minutes = 25;

    angles.push(angle);
    angle += spc;


    /// space out radius
    radius += (radiusSat - 20);




    function loop(trigger) {
      pos = $('#center').position();
      $('#center').css("left", $("body").width() / 2 - 125);

      cx = pos.left + radius;
      cy = pos.top + radius;

      angle = angles[0];

      x = cx + radius * Math.cos(angle * deg2rad);
      y = cy + radius * Math.sin(angle * deg2rad);

      $('#sat1').css({
        left: x - radiusSat,
        top: y - radiusSat
      });

      angles[0] = angles[0] - 0.3;
      if (angles[0] < -360) angles[0] = 0;
    }


    startAll();
  }

  startAll();

  document.getElementById("play").addEventListener("click", startAll);
  document.getElementById("pause").addEventListener("click", stopAll);
  document.getElementById("reset").addEventListener("click", resetAll);
  document.getElementById("settings").addEventListener("click", settings);

  $("#cancel").on("click", cancel);

  $("#save").on("click", save);


  $("#settingsSection").hide();

  function settings() {
    $("#pomodoroSection").hide();
    $("#settingsSection").show();
    // all settings
  }


  function save() {
    cancel();

  }

  function cancel() {
    $("#pomodoroSection").show();
    $("#settingsSection").hide();
  }