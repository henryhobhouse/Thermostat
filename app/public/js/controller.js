var thermostat;

$(document).ready(function() {

  $.getJSON('/new_initialization', { get_param: 'value' }, function(data) {
    var name = 'thermostat'
    thermostat = new Thermostat(data.name, data.powersave, data.temp);
    on_load()
  });

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

  function on_load() {
    $("#current").text( "current_temperature: " + thermostat.current_temperature );
    $("body").attr('class', thermostat.energy_usage );
    $("#min").text( "MAX temp: " + thermostat.max );
    $("#max").text( "MIN temp: " + thermostat.MIN );
    $("#power_status").text( "Power Saver Status: " + thermostat.powersaver );
  }

  function update_temp() {
    $("#current").text( "current_temperature: " + thermostat.current_temperature );
    $("body").attr('class', thermostat.energy_usage );
    save_settings(thermostat.name, thermostat.current_temperature, thermostat.powersaver);
  }

  function update_max() {
    $("#min").text( "MAX temp: " + thermostat.max );
  }

  function save_settings(inst_name, temp_status, power_status) {
    var formData = {
      temp:temp_status,
      power:power_status,
      name:inst_name,
      location:"London"
    }
    console.log(formData)
    $.ajax({
      type: 'POST',
      url: '/save',
      data: JSON.stringify(formData),
      success: function(formData) { alert('data: ' + formData); },
      contentType: "application/json",
      dataType: 'json'
    });
  }

});
