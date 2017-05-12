var thermostat = new Thermostat();

$(document).ready(function() {
  $("#increasetemp").click(function() {
    thermostat.uptemp();
    update_temp();
  });

  $("#decreasetemp").click(function() {
    thermostat.downtemp();
    update_temp();
  });

  $("#temp_reset").click(function() {
    thermostat.temp_reset();
    update_temp();
  });

  $("#power_saver").change(function() {
    thermostat.saver_switch();
    $("#power_status").text( "Power Saver Status: " + thermostat.powersaver );
    update_max();
    update_temp();
  });

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=118b160902d01096293407ce94a46406&units=metric", function(weather_data) {
    $("#weather").text("Outside Weather is: " + (weather_data.main.temp).toFixed(2) + "°C");
  });

  update_temp();
  update_max();
  $("#max").text( "MIN temp: " + thermostat.MIN );
  $("#power_status").text( "Power Saver Status: " + thermostat.powersaver );

});

function update_temp() {
  $("#current").text( "current_temperature: " + thermostat.current_temperature );
  $("body").attr('class', thermostat.energy_usage );
  thermostat.save_settings();
}

function update_max() {
  $("#min").text( "MAX temp: " + thermostat.max );
}
