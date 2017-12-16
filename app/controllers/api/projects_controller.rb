class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    if @project.save
      render :create
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])
    if @project.update_attributes(project_params)
      render :create
    else
      render json: @project.errors.full_messages, status: 404
    end
  end

  private
  def project_params
    params.require(:project).permit(:role_id, :project, :location,
                                    :start_date, :end_date, :review, :rating)
  end
end
