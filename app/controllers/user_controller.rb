class UserController < ApplicationController

  def index
    @user=User.new
    @users = User.order(:name)
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:notice] = "Registered successfully"
      redirect_to root_path
    else
      render :action => 'index'
    end
  end

  def validate
    render :json => [User.exists?(:email => params[:email])]
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :date_of_birth,:gender, :address, :mobile_number,:city,:course,:year_of_pass,:preferred_aptitude_center,:preferred_gd_center)
  end
end