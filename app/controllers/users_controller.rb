class UsersController < ApplicationController

  def create
    @user = User.new(user_params)



    if @user.save
      flash[:message] = "Successfully created..."
      redirect_to application_angular_path
    else
      fail
      flash[:message] = @user.errors.full_messages.to_sentence
      redirect_to root_path
    end

  end


  private
  def user_params
    params.require(:user).permit(:email, :password)

  end
end
