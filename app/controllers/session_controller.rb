class SessionController < ApplicationController

  def create
    user = User.find_by(email: user_params[:email])

    if user && user.authenticate(user_params[:password])

      token = SecureRandom.urlsafe_base64

      session[:session_token] = token
      user.update(session_token: token)

  end

  redirect_to application_home_path
end
