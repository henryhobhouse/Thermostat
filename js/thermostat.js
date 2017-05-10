function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.current_temperature = this.DEFAULT_TEMP;
  this.MIN = 10;
  this.powersaver = true;
  // this.max = MAX_SAVER_ON;
  this.MAX_SAVER_ON = 25;
  this.MAX_SAVER_OFF = 32;
  this.check_energy_usage();
  this._check_max();
};

Thermostat.prototype.uptemp = function() {
  this._check_temp();
  this.current_temperature++;
  this.check_energy_usage();
};

Thermostat.prototype.downtemp = function() {
  this._check_temp();
  this.current_temperature--;
  this.check_energy_usage();
};

Thermostat.prototype._check_temp = function() {
  this._check_max();
  if (this.current_temperature <= this.MIN) throw "Temp is too low";
  if (this.current_temperature >= this.max) throw "Temp is too high";
}

Thermostat.prototype.saver_switch = function() {
  if (this.powersaver === true) {
    this.powersaver = false;
  } else {
    this.powersaver = true;
  }
  this._check_max();
}

Thermostat.prototype._check_max = function() {
  if (this.powersaver === true) {
    this.max = this.MAX_SAVER_ON;
  } else {
    this.max = this.MAX_SAVER_OFF;
  }
}

Thermostat.prototype.temp_reset = function() {
  this.current_temperature = this.DEFAULT_TEMP;
  this.check_energy_usage();
}

Thermostat.prototype.check_energy_usage = function() {
  if (this.current_temperature < 18) {this.energy_usage = "low_usage"};
  if (this.current_temperature >= 18 && this.current_temperature < 25) {this.energy_usage = "medium_usage"};
  if (this.current_temperature >= 25) {this.energy_usage = "high_usage"};
}
