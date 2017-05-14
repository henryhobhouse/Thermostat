ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'
require_relative 'models/model_controller.rb'
require 'json'

# Controller for bookmark app
class Thermostat_control < Sinatra::Base
  DEFAULT_TEMP = 20
  DEFAULT_POWERSAVE = true

  get '/' do
    erb :index
  end

  post '/save' do
    data = JSON.parse request.body.read
    power = ( data["power"] == true )
    Settings.first_or_create(:name=>data["name"]).update(
      temp: data["temp"],
      powersaver: power,
      )
  end

  get '/new_initialization' do
    name = (Settings.last[:name] ||= 'test')
    location = (Settings.last[:location] ||= 'London')
    temp_status = (Settings.last[:temp] ||= DEFAULT_TEMP)
    power_save_status = (Settings.last[:powersaver] ||= DEFAULT_POWERSAVE)
    content_type :json
    { :name => name, :location => location, :temp => temp_status, :powersaver => power_save_status }.to_json
  end

  run! if app_file == $PROGRAM_NAME
end
