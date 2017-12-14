class UserMailer < ApplicationMailer
  default from: 'jackwu350@gmail.com'

 def welcome_email(user)
   @user = user
   mail(to: user.email, subject: 'Welcome to WorkReal')
 end

end
