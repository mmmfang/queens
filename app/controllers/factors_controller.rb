class FactorsController < ApplicationController

  def create
    @mood = Mood.find(params[:mood_id])

    @factor = factor.moods.new(factor_params)

    if @factor.save

    else
      render json: {
        error: {
          message:
          @factor.errors.full_messages.to_sentence
        }
      }
  end
end

def show
  mood = Mood.find(params[:mood_id])
  @factor = mood.factor([:id])
end

def index
  mood = Mood.find(params[:mood_id])
  @factors = mood.factors
end
  private

  def factor_params
    params.require(:factor).permit(:blurb, :occurred_at)

  end

end
