class User < ActiveRecord::Base
  validates_presence_of :name,:date_of_birth,:gender,:city,:course,:year_of_pass,:preferred_aptitude_center,:preferred_gd_center,:mobile_number
  validates :mobile_number, :length => {:maximum => 14, :minimum => 10, :too_short => "Number is too short"}
  validates :mobile_number, :numericality => {:only_integer => true}
  validates_date :date_of_birth, :on_or_before => lambda {"1996-06-30"},
                 :on_or_before_message => "Must be on or before 30-06-1996"
  validates_format_of :email,:message => "Invalid E-Mail",:with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  validates_uniqueness_of :email,:message => "Already Taken", :case_sensitive => false
end
