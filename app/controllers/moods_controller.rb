class MoodsController < ApplicationController
before_action :require_current_user
# skip_before_action :verify_authenticity_token, only: :create
  def index
    @moods = current_user.moods

  end


  def create
    @mood = current_user.moods.new(mood_params)


    if @mood.save
    # else
    #   render json: {
    #     error: {
    #       @mood.error.full_messages.to_string
    #     }
    #   }

    end
  end


def edit
  @mood = current_user.moods(mood_params)
end

def update
  @mood = current_user.moods(mood_params)
  @mood.update(mood_params)
end
def show
  @mood = current_user.moods(mood_params).all
end
def destroy
  @mood = current_user.moods(mood_params)
  @mood.destroy
  flash[:notice] = "Mood deleted!"

  redirect_to moods_path
end


private

  def mood_params
    params.require(:mood).permit(:happiness)
  end
end
