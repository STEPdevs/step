class User < ActiveRecord::Base
  validates_presence_of :phone_number
  validates_confirmation_of :phone_number, message: "Number mismatch"

  validates :phone_number, :length => {:minimum => 10, :maximum => 14, too_short: "Number is too short (minimum is 10 characters)"}
  validates :phone_number, :numericality => {:only_integer => true, :message => "Number should be between 0-9"}
  validates_uniqueness_of :phone_number, :message => "Already taken"

  validates_associated :other_user_details

  has_one :other_user_details, :foreign_key => "users_phone_number"

  attr_accessible :phone_number, :phone_number_confirmation, :status, :count
end