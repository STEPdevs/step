require 'json'

class ModifyController < ApplicationController
  def set
    dob= params[:dob]
    dob= Date.parse(dob)
    dob=dob.strftime('%Y/%m/%d')
    new_dob = {
        :modify => {:dob => "#{dob}"}
    }

    File.new(Dir.pwd+"/app/assets/objects/modify.json")
    File.open(Dir.pwd+"/app/assets/objects/modify.json", "w") do |f|
      f.write(JSON.pretty_generate(new_dob))
    end
    redirect_to "/admin/modify#"
  end
end