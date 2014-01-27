class User < ActiveRecord::Base
  validates :name,:email,:date_of_birth,:mobile_number,:city,:course,:yearOfPass,:preferredAptitudeCenter,:preferredGDCenter, :presence => true
  validates_uniqueness_of :email
end
