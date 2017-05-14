ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'
require_relative 'models/model_controller.rb'
require 'json'

# Controller for bookmark app
class Thermostat_control < Sinatra::Base

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
    name = Settings.last[:name] || 'test'
    location = Settings.last[:location] || 'London'
    temp_status = Settings.last[:temp] || 20
    power_save_status = Settings.last[:powersaver] || true
    content_type :json
    { :name => name, :location => location, :temp => temp_status, :powersaver => power_save_status }.to_json
  end

  run! if app_file == $PROGRAM_NAME
end
