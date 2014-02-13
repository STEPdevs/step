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
			respond_to do |format|
				if @user.save
	  	  	format.json {render :json=>@user}
		    else
		      format.json {render :json=>@user.errors}
		    end
			end
		end

		def create_user_with_other_information
			@user = User.find_by_phone_number(params[:phone_number])
			if @user
				@user.other_user_details = OtherUserDetails.new(params[:other_user_details])
				respond_to do |format|
					if @user.save
						format.html {render :action=>"index",:flash=>{success:"registration successfull"}}
		  	  	format.json {render :json=>@user.other_user_details}
			    else
						format.html {render :action=>"index"}
			      format.json {render :json=>@user.other_user_details.errors}
			    end
				end
			end
		end

  def validate
    render :json => [User.exists?(:email => params[:email])]
  end
end