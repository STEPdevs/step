courses = {
          0=>"Diploma in computer engennering",
           1=>"Diploma in Information Technology",
          2=>"Diploma in computer science"}

year_of_passing = {
    0=>"2010",
    1=>"2011",
    2=>"2012",
    3=>"2013"
}

date_of_births={
    0=>"1996-01-21",
    1=>"1997-12-10",
    2=>"1995-03-03",
    3=>"1996-08-24",
    4=>"1995-11-02",
    5=>"1994-06-15",
    6=>"1996-04-27",
    7=>"1994-08-25",
    8=>"1995-05-17",
    9=>"1997-10-13"
}


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

state = {
    0=>"Andaman and Nicobar Islands",
    1=>"Andra Pradesh",
    2=>"Arunachal Pradesh",
    3=>"Assam",
    4=>"Bihar",
    5=>"Chhattisgarh",
    6=>"Chandigarh",
    7=>"Dadar and Nagar Haveli",
    8=>"Daman and Diu",
    9=>"Delhi",
    10=>"Goa",
    11=>"Gujarat",
    12=>"Haryana",
    13=>"Himachal Pradesh",
    14=>"Jammu and Kashmir",
    15=>"Jharkhand",
    16=>"Karnataka",
    17=>"Kerala",
    18=>"Lakshadeep" ,
    19=>"Madya Pradesh",
    20=>"Maharashtra",
    21=>"Manipur",
    22=>"Meghalaya",
    23=>"Mizoram",
    24=>"Nagaland",
    25=>"Orissa",
    26=>"Punjab",
    27=>"Pondicherry",
    28=>"Rajasthan",
    29=>"Sikkim",
    30=>"Tamil Nadu",
    31=>"Tripura",
    32=>"Uttaranchal",
    33=>"Uttar Pradesh",
    34=>"West Bengal"

}
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
  if i<35
    State.create!(name:state[i])
  end
	gender = "Male"
	if i > 23
		gender = "Female"
	end


	OtherUserDetails.create!({name: "sandeep", date_of_birth: date_of_births[i%10], gender: gender, email: "name#{i}@gmail.com",state: state[i%35], users_phone_number: "893920047#{i}", course: courses[i%3],year_of_pass:year_of_passing[i%4], preferred_aptitude_center: "Chennai", preferred_gd_center: preferred_gd_center[i%4]})
	User.find_by_phone_number("893920047#{i}").update_attributes(status:"COMPLETE");
	user = User.find_by_phone_number("893920047#{i}")
	user.update_attributes(count:user.count+1);
end