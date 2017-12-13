class Api::TruthsController < ApplicationController
  def create
    @truth = Truth.new(user_id: current_user.id, real_id: params[:real_id])
    @truth.save
    render :show
  end

  def destroy
    @truth = Truth.find(params[:id])
    @truth.destroy
    render :show
  end
end
