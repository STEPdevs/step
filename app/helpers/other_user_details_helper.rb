module OtherUserDetailsHelper
  def getDOB
    file = open(Dir.pwd+"/app/assets/objects/modify.json")
    json=file.read
    parsed= JSON.parse(json)
    dob=Date.parse(parsed["modify"]["dob"]).strftime('%d/%m/%Y')
    dob
  end
end