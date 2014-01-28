class UserController < ApplicationController
  def index
    @users = User.order(:name)
  end
  def create
    @user = User.new(user_params)
    #UserMailer.welcome_email(@user).deliver
    @user.save
    flash[:notice] = "Registered successfully"
    redirect_to root_path
  end

  def validate
    email = params[:email]
    if  User.exists?(:email => email)
      render :json =>  [false]
    else
      render :json =>  [true]
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :date_of_birth,:gender, :address, :mobile_number,:city,:course,:year_of_pass,:preferred_aptitude_center,:preferred_gd_center)
  end
end