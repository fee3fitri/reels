class Api::CartItemsController < ApplicationController

  before_action :require_logged_in

  def index
    @user = User.find(params[:id])
    @cart_items = CartItem.find_by(user_id: @user[:id])
    render :index
  end

  def update
    @cart_item = CartItem.find_by(id: params[:id])
    
    if @cart_item && @cart_item.update(cart_items_params)
      render :index
    else
      render json: {errors: @cart_item.errors.full_messages}, status: :uprocessable_entity
    end
  end

  def create
    @cart_item = CartItem.new(cart_items_params)
    
    if @cart.save
      render :index
    else
      render json: {errors: @cart_item.errors.full_messages}, status: :uprocessable_entity
    end
  end

  def destroy
    @cart_item = CartItem.find_by(user_id: @user[:id])
    
    if @cart_item.destroy
      render :index
    else
      render json: {errors: @cart_item.errors.full_messages}, status: :uprocessable_entity

  end

  private
  def cart_items_params
    params.require(:cart_item).permit(
      :id,
      :user_id,
      :product_id,
      :quantity
    )
  end
end
