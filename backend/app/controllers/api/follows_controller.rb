class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(user_id: current_user.id, role_id: params[:role_id])
    @follow.save
    render :show
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    render :show
  end
end
