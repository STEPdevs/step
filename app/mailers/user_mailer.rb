class UserMailer < ActionMailer::Base
    default :from => 'thoughtwork.step@gmail.com'
  def welcome_email(user)
    @user = user
    @url  = 'http://www.thoughtworks.com/STEP'
    puts @user.email
    mail(:to => @user.email, :subject => 'Successfully Register STEP Programming')
  end

end