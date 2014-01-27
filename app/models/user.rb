class User < ActiveRecord::Base
  validates :name,:email,:date_of_birth,:mobile_number,:city,:course,:year_of_pass,:preferred_aptitude_center,:preferred_gd_center, :presence => true
  validates_uniqueness_of :email
end
