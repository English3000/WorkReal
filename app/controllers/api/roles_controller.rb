class Api::RolesController < ApplicationController

  def index
  end

  def create
    @role = Role.new(role_params)
    @role.user_id = current_user.id
    if @role.save
      render json: @role
    else
      render json: @role.errors.full_messages
  end

  def update
  end


  private

  def role_params
    params.require(:role).permit(:title, :industry, :location, :review, :start_date, :end_date)
  end

end
