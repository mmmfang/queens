class MoodsController < ApplicationController

  def index
    @moods = current_user.moods
  end


  def create
    @mood = current_user.moods.new(mood_params)
    if @mood.save
    else
      render json: {
        error: {
          @mood.error.full_messages.to_string
        }
      }
  end

private

  def mood_params
    params.require(:mood).permit(:happiness)
  end

end
