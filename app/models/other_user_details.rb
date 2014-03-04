require 'json'

include OtherUserDetailsHelper

class OtherUserDetails < ActiveRecord::Base
  belongs_to :user, :foreign_key => "users_phone_number"

  validates_presence_of :name, :date_of_birth, :gender, :state, :course, :year_of_pass, :preferred_aptitude_center, :preferred_gd_center, :users_phone_number, :email

  validates :users_phone_number, :length => {:minimum => 10, :maximum => 14, too_short: "Mobile Number is too short (minimum is 10 characters)"}
  validates :users_phone_number, :numericality => {:only_integer => true,:message => "Number should be between 0-9"}

  validates_format_of :email, :message => "Invalid E-Mail", :with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  validates_uniqueness_of :email, :message => "Already Taken", :case_sensitive => false

  validates_date :date_of_birth, :on_or_before => self.getDOB,
                 :on_or_before_message => "Must be on or before #{self.getDOB}"


  attr_accessible :name, :email, :date_of_birth, :gender, :address, :state, :course, :year_of_pass, :preferred_aptitude_center, :preferred_gd_center, :users_phone_number, :alt_phone_number, :id
end