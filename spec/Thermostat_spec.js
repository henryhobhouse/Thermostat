describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("It initializes at 20 degress", function () {
    expect(thermostat.temperature).toEqual(20)
  });

  it("It increases temperature by 1 from 20 to 21 degrees", function () {
    thermostat.uptemp()
    expect(thermostat.temperature).toEqual(21)
  });

  it("It decreases temperature by 1 from 20 to 19 degrees", function () {
    thermostat.downtemp()
    expect(thermostat.temperature).toEqual(19)
  });

  it("Will not let temperature go below 10", function () {
    thermostat.temperature = 10;
    expect(function(){
      thermostat.downtemp()}).toThrow("Temp is too low");
  });

  it("Will not let temperature go above 25 on powersaver ON", function () {
    thermostat.temperature = 25;
    expect(function(){
      thermostat.uptemp()}).toThrow("Temp is too high");
  });

  it("Will not let temperature go above 32 on powersaver OFF", function () {
    thermostat.temperature = 32;
    thermostat.powersaver = false;
    expect(function(){
      thermostat.uptemp()}).toThrow("Temp is too high");
  });


});