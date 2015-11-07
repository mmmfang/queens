class FactorsController < ApplicationController
  # skip_before_action :verify_authenticity_token

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
  @factor = mood.factors.find(factor_params)
end

def index
  mood = Mood.find(params[:mood_id])
  @factors = mood.factors
end

def edit
  mood = Mood.find(params[:mood_id])
  @factor = mood.factors.find(factor_params)
end

def update
  mood = Mood.find(params[:mood_id])
  @factor = mood.factors.find(factor_params)
  @factor.save(factor_params)
end

def destroy
  mood = Mood.find(params[:mood_id])
  @factor = mood.factors.find(factor_params)
  @factor.destroy
end

  private
  def factor_params
    params.require(:factor).permit(:blurb, :occurred_at, :image)

  end

end
