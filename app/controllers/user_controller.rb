class UserController < ApplicationController
  def index
    @users = User.order(:name)
  end
  def create
    @user = User.new(user_params)
    #UserMailer.welcome_email(@user).deliver
    @user.save
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
    params.require(:user).permit(:name, :email, :date_of_birth, :address, :mobile_number,:city)
  end
end