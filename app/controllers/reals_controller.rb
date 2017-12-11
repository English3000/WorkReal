class RealsController < ApplicationController
  def index # a search would trigger a new GET request
    get_reals
  end

  # def destroy
  # end
  #
  # def create
  # end
  #
  # def update
  # end

  private
  def get_reals
    if params[:role_id]
      @reals = Real.where(role_id: params[:role_id]).order(updated_at: :desc)
    else
      @reals = Real.all # sort by current user location, search query, or user show page
    end
  end
end
