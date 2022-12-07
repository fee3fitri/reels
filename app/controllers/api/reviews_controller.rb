class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: {errors: @review.errors.full_messages}, status: :uprocessable_entity
    end
  end

  def index
    @reviews = Review.where(product_id: params[:product_id])
    render :index
  end

  def update
    @review = Review.find_by(id: params[:id])
    # debugger
    if @review && @review.update(review_params)
      render :show
    else
      render json: {errors: @review.errors.full_messages}, status: :uprocessable_entity
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])

    if @review.destroy
      render json: {messsage: "Review is successfully removed"}
    end
  end

  private
  def review_params
    params.require(:review).permit(
      :user_id,
      :product_id,
      :title,
      :body,
      :rating
    )
  end
end