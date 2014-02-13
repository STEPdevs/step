courses = {
          0=>"Diploma in computer engennering",
           1=>"Diploma in Information Technology",
          2=>"Diploma in computer science"}

22.times do |i|
	User.create!(phone_number:"893920047#{i}",count:0)
	Courses.create!({name: "Diploma in course#{i}"})
	GdCenters.create!({place: "GdCenters#{i}"})
	AptitudeCenters.create!({place: "AptitudeCenter#{i}"})
	gender = "Male"
	if i > 10
		gender = "Female"
	end

	OtherUserDetails.create!({name: "sandeep", date_of_birth: "1996-06-12", gender: gender, email: "name#{i}@gmail.com",city: "che", users_phone_number: "893920047#{i}", course: courses[i%3],year_of_pass: "2013", preferred_aptitude_center: "Chennai", preferred_gd_center: "Chennai"})
end