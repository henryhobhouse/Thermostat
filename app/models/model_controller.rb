require 'data_mapper'
require 'dm-postgres-adapter'
require_relative './thermo_settings.rb'

DataMapper.setup(:default, ENV['DATABASE_URL'] ||
                  "postgres://localhost/thermo_settings_#{ENV['RACK_ENV']}")

DataMapper.finalize
DataMapper.auto_upgrade!
