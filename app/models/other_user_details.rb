class OtherUserDetails < ActiveRecord::Base
	belongs_to :user,:foreign_key => "users_phone_number"

  validates_presence_of :name,:date_of_birth,:gender,:city,:course,:year_of_pass,:preferred_aptitude_center,:preferred_gd_center

  validates_date :date_of_birth,
                 :on_or_before_message => "Must be on or before 30-06-1996"
  validates_format_of :email,:message => "Invalid E-Mail",:with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  validates_uniqueness_of :email,:message => "Already Taken", :case_sensitive => false

	attr_accessible :name, :email, :date_of_birth,:gender, :address,:city,:course,:year_of_pass,:preferred_aptitude_center,:preferred_gd_center, :users_phone_number
end