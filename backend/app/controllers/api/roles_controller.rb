class Api::RolesController < ApplicationController

  # def index
    # get current_user's roles
    # get roles w/in X of current_user's current role's location
      # .json.jbuilder will return roles w/ project_ids & projects assoc's w/ each role
  # end

  def show
    @role = Role.find(params[:id])
    if @role
      @projects = @role.projects
      render :show
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

  # def update
  # end

  private
  def role_params
    params.require(:role).permit(:user_id, :title, :industry, :location,
                                 :review, :start_date, :end_date)
  end
end
