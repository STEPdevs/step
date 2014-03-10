class UsersController < ApplicationController

  def index
    @user=User.new
    @other_user_details=OtherUserDetails.new
  end

  def create
    begin
      @user=User.new(params[:user])
      create_user_with_other_information
    rescue => e
      @other_user_details ||= OtherUserDetails.new params[:user][:other_user_details]
      if @other_user_details.valid?
        flash[:success] = "Registration Successful"
        redirect_to root_path
      else
        render "users/index"
      end
    end
  end

  def validate_number
    create_user_with_phone_number
  end

  def validate_email
    render :json => OtherUserDetails.exists?(:email => params[:email])
  end

  private
  def create_user_with_phone_number
    user = User.find_by_phone_number(params[:user][:phone_number])
    respond_to do |format|
      unless OtherUserDetails.exists?(users_phone_number: params[:user][:phone_number])
        if user
          user.update_attributes!(count: user.count+1) if user[:status]=="INCOMPLETE"
          @user = user
        else
          @user = User.create!(phone_number: params[:user][:phone_number], count: "0")
        end
        format.json { render :json => @user }
      end
      @user = User.create(phone_number: params[:user][:phone_number], count: "0") unless User.exists? @user
      @user.valid?
      format.json { render :json => @user.errors }
    end
  end

  private
  def create_user_with_other_information
    unless @other_user_details
      @other_user_details = OtherUserDetails.create!(params[:user][:other_user_details])
      @user = User.find_by_phone_number(params[:user][:phone_number])
      @user.update_attributes!(status: "COMPLETE")
      flash[:success]= "Registration Successful"
      redirect_to root_path
    end
  end
end