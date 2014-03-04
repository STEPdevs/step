class UsersController < ApplicationController

  def index
    @user=User.new
    @other_user_details=OtherUserDetails.new
  end

  def create
    begin
      @user = create_user_with_phone_number
      create_user_with_other_information
    rescue => e
      @other_user_details ||= OtherUserDetails.new params[:user][:other_user_details]
      flash[:success] = "Registration Successful" if @other_user_details.valid?
      render "users/index"
    end
  end

  def validate
    OtherUserDetails.exists?(:email => params[:user][:other_user_details][:email])
  end

  private
  def create_user_with_phone_number
    user = User.all.find_by_phone_number(params[:phone_number])
    if user
      user.update_attributes!(count: user.count+1)
      @user = user
    else
      @user = User.create(phone_number: params[:phone_number], count: "1")
    end
    @user
  end

  private
  def create_user_with_other_information
    unless @other_user_details
      @other_user_details = OtherUserDetails.create!(params[:user][:other_user_details])
      @user.update_attributes!(status: "COMPLETE")
      flash[:success]= "Registration Successful"
      redirect_to root_path
    end
  end
end