class MoodsController < ApplicationController
before_action :require_current_user

# skip_before_action :verify_authenticity_token, only: :create
  def index
    @moods = current_user.moods

  end


  def create
    @mood = current_user.moods.new(mood_params)

    if @mood.save
      redirect_to moods_path
    else
      flash[:message] = @moods.errors.full_messages.to_sentence
render :new
    # if @mood.save
    # else
    #   render json: {
    #     error: {
    #       @mood.error.full_messages.to_string
    #     }
    #   }
    #
    # end
  end
end

def edit
end

def update

end
def show

end
def delete

end


private

  def mood_params
    params.require(:mood).permit(:happiness)
  end
end
