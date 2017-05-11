ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'

# Controller for bookmark app
class Thermostat_control < Sinatra::Base

  get '/' do
    erb :index
  end

  run! if app_file == $PROGRAM_NAME
end
