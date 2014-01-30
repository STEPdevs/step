ActiveAdmin.register User do
  index do
    column 'Email',:email
    column 'Name',:name
    column 'Date Of Birth',:date_of_birth
    column 'Gender',:gender
    column 'Address',:address
    column 'City',:city
    column 'Contact Number',:mobile_number
    column 'Passing Year',:year_of_pass
    column 'Aptitude Center',:preferred_aptitude_center
    column 'GD Center',:preferred_gd_center
    default_actions
  end
end
