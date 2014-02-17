FactoryGirl.define do
	factory :other_user_details, class: :OtherUserDetails do
		name "name1"
		email "a@bn.com"
		date_of_birth Time.now
		gender "male"
		state "city1"
		course "some course"
		year_of_pass Time.now
		users_phone_number "1234567890"
		preferred_aptitude_center "banglore"
		preferred_gd_center "some center"
	end
end