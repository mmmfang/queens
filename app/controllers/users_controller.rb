class UsersController < ApplicationController

  def created
    @user = User.new(user_params)

    if @user.save
        flash[:message] = "Successfully created..."
    else
      flash[:message] = @user.errors.full_message.to_sentence
  end


  private
  def user_params
    params.require(:user).permit(:email, :password)

  end
end
