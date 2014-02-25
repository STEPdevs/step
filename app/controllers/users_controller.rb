class UsersController < ApplicationController

  def index
    @user=User.new
    @users = User.order(:name)
    @other_user_details = OtherUserDetails.new
  end

  def create
  	unless params[:other_user_details]
			create_user_with_phone_number
			return
  	end
		create_user_with_other_information
	end

	private
		def create_user_with_phone_number
			@user = User.new(params[:user])
			user =  User.find_by_phone_number(params[:user][:phone_number])
			user.update_attributes(count: user.count+1) if user
			respond_to do |format|
				if @user.save
					@user.update_attributes(count: @user.count+1)
	  	  	format.json {render :json=>@user}
		    elsif OtherUserDetails.find_by_users_phone_number(params[:user][:phone_number]).present?
					format.json {render :json=>@user.errors}
		    elsif @user.errors[:phone_number] == ["has already been taken"]
					format.json {render :json=>@user}
		    else
					format.json {render :json=>@user.errors}
		    end
			end
		end

		def create_user_with_other_information
				@user = User.find_by_phone_number(params[:phone_number])
				if @user and !@user.other_user_details
					@user.other_user_details = OtherUserDetails.new(params[:other_user_details])
					respond_to do |format|
						if @user.save
							@user.update_attributes(status: "COMPLETE")
							format.html {redirect_to root_path,:flash=>{success:"Registration Successful"}}
							format.json {render :json=>@user.other_user_details}
				    else
							format.html {render action:"index",:flash=>{success:"Registration error , please check if all the fields are entered correctly"}}
				      format.json {render :json=>@user.other_user_details.errors}
				    end
					end
				else
					redirect_to root_path,:flash=>{success:"Registration error, please check if all the fields are entered correctly"}
				end
		end

  def validate
    render :json => [User.exists?(:email => params[:email])]
  end
end