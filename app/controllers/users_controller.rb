class UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      flash[:message] = "Successfully created..."
    else
      flash[:message] = @user.errors.full_messages.to_sentence

    end
      redirect_to root_path
    end




    def destroy
      # Remove the user id from the session
      @current_user = session[:current_user_id] = nil
      redirect_to root_url
    end


  private
  def user_params
    params.require(:user).permit(:email, :password)

  end
end
