class Api::RolesController < ApplicationController
  # def index
    # get current_user's roles
    # get roles w/in X of current_user's current role's location
      # .json.jbuilder will return roles w/ project_ids & projects assoc's w/ each role
  # end

  def show
    @role = Role.find(params[:id])
    render :show
  end

  def create
    @role = Role.new(role_params)
    @role.user_id = current_user.id
    if @role.save
      render :create
    else
      render json: @role.errors.full_messages, status: 404
    end
  end

  def update
    @role = Role.find(params[:id])
    if @role.update_attributes(role_params)
      render :create
    else
      render json: @role.errors.full_messages, status: 404
    end
  end

  private
  def role_params
    params.require(:role).permit(:user_id, :title, :industry, :location,
                                 :review, :start_date, :end_date)
  end
end
