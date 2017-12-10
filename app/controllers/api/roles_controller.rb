class Api::RolesController < ApplicationController

  def index
  end

  def create
  end

  def update
  end


  private

  def role_params
    params.require(:role).permit(:title, :industry, :location, :review, :start_date, :end_date)
  end

end
