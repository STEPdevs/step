class User < ActiveRecord::Base
  validates :name,:email,:date_of_birth,:gender,:mobile_number,:city,:course,:year_of_pass,:preferred_aptitude_center,:preferred_gd_center, :presence => true
  validates_format_of :email,:with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  validates_uniqueness_of :email
end
