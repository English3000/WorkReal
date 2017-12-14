class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    if @project.save
      render json: @project
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  # def update
  # end

  private
  def project_params
    params.require(:project).permit(:role_id, :project, :location,
                                    :start_date, :end_date, :review, :rating)
  end
end
