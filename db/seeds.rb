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
    0=>"Ahmedabad",
    1=>"Allahabad",
    2=>"Bangalore",
    3=>"Baroda",
    4=>"Belgaum",
    5=>"Bhopal",
    6=>"Bhubaneswar",
    7=>"Chandigarh",
    8=>"Chennai",
    9=>"Cochin",
    10=>"Coimbatore",
    11=>"Dehradun",
    12=>"Delhi",
    13=>"Gurgaon",
    14=>"Guwahati",
    15=>"Hyderabad",
    16=>"Indore",
    17=>"Jaipur",
    18=>"Jamshedpur",
    19=>"Kolkata",
    20=>"Lucknow",
    21=>"Mangalore",
    22=>"Mumbai",
    23=>"Nagpur",
    24=>"Patna",
    25=>"Pune",
    26=>"Raipur",
    27=>"Ranchi",
    28=>"Rourkela",
    29=>"Trivandrum",
    30=>"Vijayawada",
    31=>"Vishakapatnam"}


preferred_gd_center = {
    0=>"Chennai",
    1=>"Pune",
    2=>"Gurgaon",
    3=>"Bangalore"}



40.times do |i|
	User.create!(phone_number:"893920047#{i}")
	if i<3
    Courses.create!({name: courses[i]})
  end
  if i<4
    GdCenters.create!({place: preferred_gd_center[i]})
  end
  if i<32
    AptitudeCenters.create!({place: preferred_aptitude_center[i]})
  end

	gender = "Male"
	if i > 23
		gender = "Female"
	end

	OtherUserDetails.create!({name: "sandeep", date_of_birth: "1996-06-12", gender: gender, email: "name#{i}@gmail.com",city: "che", users_phone_number: "893920047#{i}", course: courses[i%3],year_of_pass: "2013", preferred_aptitude_center: "Chennai", preferred_gd_center: "Chennai"})
	User.find_by_phone_number("893920047#{i}").update_attributes(status:"COMPLETE");
	user = User.find_by_phone_number("893920047#{i}")
	user.update_attributes(count:user.count+1);
end