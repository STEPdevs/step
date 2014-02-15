require 'spec_helper'

describe UsersController do
	describe "create" do
		{"123456789"=>"is too short","12341234#0"=>"is too short","qwabcdefgh"=>"is too short","12345678bc"=>"is too short"}.each do |invalid_number,msg|
			it "should not create user for invalid number" do
				post :create,format: 'json',user: {phone_number: "12341234"}
				expect(response.header['Content-Type'].include?('application/json')).to be_true
				parseResponse = JSON.parse(response.body)
				errors = parseResponse["phone_number"].join(',')
				expect(errors.include?(msg)).to be_true
			end
		end

		it "should create user with valid phone number" do
			phone_number="9089898989"
			post :create,format: 'json',user: {phone_number: phone_number}
			parseResponse = JSON.parse(response.body)
			expect(response.header['Content-Type'].include?('application/json')).to be_true
			expect(parseResponse["phone_number"]).to eq(phone_number)
		end

		it "should create user and fill other user details for valid phonenumber" do
			phone_number="9089898989"
			post :create,format: 'json',user: {phone_number: phone_number}
			parseResponse = JSON.parse(response.body)
			expect(response.header['Content-Type'].include?('application/json')).to be_true
			expect(parseResponse["phone_number"]).to eq(phone_number)
			other_user_details = attributes_for(:other_user_details)
			
			post :create,format: 'json',other_user_details: other_user_details,phone_number: phone_number
			parseResponse = JSON.parse(response.body)
			expect(response.header['Content-Type'].include?('application/json')).to be_true
			expect(parseResponse["name"]).to eq("name1")
		end

		it "should not create user if all the user information for the user is present" do
			phone_number="9089898989"
			post :create,format: 'json',user: {phone_number: phone_number}
			parseResponse = JSON.parse(response.body)
			expect(response.header['Content-Type'].include?('application/json')).to be_true
			expect(parseResponse["phone_number"]).to eq(phone_number)

			other_user_details = attributes_for(:other_user_details)
			post :create,format: 'json',other_user_details: other_user_details,phone_number: phone_number
			parseResponse = JSON.parse(response.body)
			expect(response.header['Content-Type'].include?('application/json')).to be_true
			expect(parseResponse["name"]).to eq("name1")
			expect(parseResponse["users_phone_number"]).to eq(phone_number)

			post :create,format: 'json',user: {phone_number: phone_number}
			parseResponse = JSON.parse(response.body)
			expect(response.header['Content-Type'].include?('application/json')).to be_true
			expect(parseResponse['phone_number']).to eq ["has already been taken"]
		end

		it "should create user if the information is incomplete for the user" do
			phone_number="9089898989"
			post :create,format: 'json',user: {phone_number: phone_number}
			parseResponse = JSON.parse(response.body)
			expect(response.header['Content-Type'].include?('application/json')).to be_true
			expect(parseResponse["phone_number"]).to eq(phone_number)

			post :create,format: 'json',user: {phone_number: phone_number}
			parseResponse = JSON.parse(response.body)
			expect(response.header['Content-Type'].include?('application/json')).to be_true
			expect(parseResponse['phone_number']).to eq phone_number

			other_user_details = attributes_for(:other_user_details)
			post :create,format: 'json',other_user_details: other_user_details,phone_number: phone_number
			parseResponse = JSON.parse(response.body)
			expect(response.header['Content-Type'].include?('application/json')).to be_true
			expect(parseResponse["name"]).to eq("name1")
		end
	end
end