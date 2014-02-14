class User < ActiveRecord::Base
	validates_presence_of :phone_number
	validates_confirmation_of :phone_number,message: "password mismatch"

	validates_numericality_of :phone_number
	validates_format_of :phone_number, {
      :with => /\A[0-9]*\z/
  }
	validates_length_of :phone_number, :minimum => 10,:maximum=>12
	validates_uniqueness_of :phone_number

	has_one :other_user_details,:foreign_key => "users_phone_number"

	attr_accessible :phone_number,:phone_number_confirmation,:complete,:count
end