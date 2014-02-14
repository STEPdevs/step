courses = {
          0=>"Diploma in computer engennering",
           1=>"Diploma in Information Technology",
          2=>"Diploma in computer science"}

year_of_passing = {
    0=>"2010",
    1=>"2011",
    2=>"2012",
    3=>"2013"}


preferred_aptitude_center = {
    0=>"Chennai",
    1=>"Delhi",
    2=>"Pune",
    3=>"Gurgaon",
    4=>"Bangalore",
    5=>"Chandigarh"}


preferred_gd_center = {
    0=>"Chennai",
    1=>"Pune",
    2=>"Gurgaon",
    3=>"Bangalore"}



22.times do |i|
	User.create!(phone_number:"893920047#{i}")
	if i<3
    Courses.create!({name: courses[i]})
  end
  if i<4
    GdCenters.create!({place: preferred_gd_center[i]})
  end
  if i<6
    AptitudeCenters.create!({place: preferred_aptitude_center[i]})
  end

	gender = "Male"
	if i > 13
		gender = "Female"
	end

	OtherUserDetails.create!({name: "sandeep", date_of_birth: "1996-06-12", gender: gender, email: "name#{i}@gmail.com",city: "che", users_phone_number: "893920047#{i}", course: courses[i%3],year_of_pass: year_of_passing[i%4], preferred_aptitude_center: preferred_aptitude_center[i%6], preferred_gd_center: preferred_gd_center[i%4]})
	User.find_by_phone_number("893920047#{i}").update_attributes(complete:"COMPLTE");
	user = User.find_by_phone_number("893920047#{i}")
	user.update_attributes(count:user.count+1);
end