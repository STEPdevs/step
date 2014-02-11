require 'spec_helper'

describe UsersController do
	describe "create" do
		it "should create user with calid phone number" do
			phone_number="9089898989"
			post :create,format: 'json',user: {phone_number: phone_number}
			parseResponse = JSON.parse(response.body)
			expect(response.header['Content-Type'].include?('application/json')).to be_true
			expect(parseResponse["phone_number"]).to eq(phone_number)
		end

		{"123456789"=>"is too short","12341234#0"=>"is invalid","abcdefgh"=>"is invalid","12345678bc"=>"is invalid"}.each do |invalid_number,msg|
			it "should not create user identity for invalid number" do
				post :create,format: 'json',user: {phone_number: invalid_number}
				expect(response.header['Content-Type'].include?('application/json')).to be_true
				parseResponse = JSON.parse(response.body)				
				errors = parseResponse["phone_number"].join(',')
				expect(errors.include?(msg)).to be_true
			end
		end

		it "should not create user for" do
			phone_number="1089898989"
			post :create,format: 'json',user: {phone_number: phone_number}
			parseResponse = JSON.parse(response.body)
			expect(response.header['Content-Type'].include?('application/json')).to be_true
			expect(parseResponse["phone_number"]).to eq(phone_number)

			other_user_details = attributes_for(:other_user_details)
			other_user_details.merge!({phone_number: phone_number})
			
			post :create,format: 'json',other_user_details: other_user_details
			parseResponse = JSON.parse(response.body)
			expect(response.header['Content-Type'].include?('application/json')).to be_true
			expect(parseResponse["name"]).to eq("name1")
		end
	end
end