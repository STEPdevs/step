class User < ActiveRecord::Base
	has_one :other_user_details
	
	attr_accessible :phone_number
	attr_accessor :confirm_contact_number
	validates_presence_of :phone_number
	validates_length_of :phone_number, :minimum => 10
  validates_format_of :phone_number, {
      :with => /\A[0-9]*\z/
  }
  
end