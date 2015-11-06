class FactorsController < ApplicationController

  def create
    factor = Factor.find(params[:mood_id])

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

  private

  def factor_params
    params.require(:factor).permit(:blurb, :occurred_at)

  end

end
