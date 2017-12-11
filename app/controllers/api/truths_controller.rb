class Api::TruthsController < ApplicationController
  def create
    @truth = Truth.new(user_id: current_user.id, real_id: params[:real_id])
    @truth.save
    @real = Real.find(params[:real_id])
    render :show
  end

  def destroy
    @truth = Truth.find_by(user_id: current_user.id, real_id: params[:real_id])
    @truth.destroy
    @real = Real.find(params[:real_id])
    render :show
  end
end
