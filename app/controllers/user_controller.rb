class UserController < ApplicationController
  def index
  end
  def create
    @user = User.new(user_params)
    @user.save
    redirect_to root_path
  end

  private
  def user_params
    params.require(:user).permit(:name,:mobile_no, :email)
  end
end