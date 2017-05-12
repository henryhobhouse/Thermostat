# Model for Links - assocaited with Tags.
class Settings
  include DataMapper::Resource

  property :id, Serial
  property :name, String, :key => true
  property :temp, Integer
  property :location, String
  property :powersaver, Boolean

end
