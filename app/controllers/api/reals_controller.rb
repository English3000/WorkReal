class Api::RealsController < ApplicationController
  def index # a search would trigger a new GET request
    get_reals
  end

  def destroy
    @real = Real.find(params[:id])
    @real.destroy
    render :show
  end

  def create
    @real = Real.new(real_params)
    if @real.save
      render :show
    else
      render json: @real.errors.full_messages, status: 422
    end
  end

  def update
    @real = Real.find(params[:id])
    if @real.update_attributes(real_params)
      render :show
    else
      render json: @real.errors.full_messages, status: 422
    end
  end

  private
  def real_params
    params.require(:real).permit(:role_id, :project_id, :body)
  end

  def get_reals
    if params[:role_id]
      @reals = Real.where(role_id: params[:role_id]).order(updated_at: :desc)
    # elsif #search query
      #
    else
      @reals = Real.all # sort by current user location
    end
  end
end
