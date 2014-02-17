class Image < ActiveRecord::Base
	attr_accessor :image
	attr_accessible :url
end