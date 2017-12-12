class Api::RolesController < ApplicationController

  def index
  end

  def show
    @role = Role.find(params[:id])
    if @role
      render json: @role
    else
      render json: ['could not find that role']
    end
  end

  def create
    @role = Role.new(role_params)
    @role.user_id = current_user.id
    current_role = current_user.roles.select {|role| role.end_date = ''}
    if !current_role
      if @role.save
        render json: @role
      else
        render json: @role.errors.full_messages, status: 404
      end
    else
      render json: ['you can only have 1 active role']
    end
  end

  def update
  end


  private

  def role_params
    params.require(:role).permit(:title, :industry, :location, :review, :start_date, :end_date)
  end

end
