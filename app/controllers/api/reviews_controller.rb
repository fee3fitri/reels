class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def create
    debugger
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

    if @review.update(review_params)
      render :show
    else
      render json: {errors: @review.errors.full_messages}, status: :uprocessable_entity
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    # Might need to add the corresponds user to delete the reviews

    if @review.destroy
      # Might need to add all the reviews
      # @reviews = Review.all
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