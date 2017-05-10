
$("#increasetemp").click(function() {
  thermostat.uptemp();
  $("#current").text( "current_temperature: " + thermostat.current_temperature )
});
$("#decreasetemp").click(function() {
  thermostat.downtemp();
  $("#current").text( "current_temperature: " + thermostat.current_temperature )
});
$("#temp_reset").click(function() {
  thermostat.temp_reset();
  $("#current").text( "current_temperature: " + thermostat.current_temperature )
});
$("#current").text( "current_temperature: " + thermostat.current_temperature )
$("#min").text( "MAX temp: " + thermostat.max )
$("#max").text( "MIN temp: " + thermostat.MIN )
$("#power_status").text( "Power Saver Status: " + thermostat.powersaver )
