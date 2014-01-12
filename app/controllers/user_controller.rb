class UserController < ApplicationController
  def index
    @users = User.order(:name)
  end
  def create
    @user = User.new(user_params)
    @user.save
    redirect_to root_path
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :date_of_birth, :address, :mobile_number)
  end
end