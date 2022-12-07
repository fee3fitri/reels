class Api::CartItemsController < ApplicationController

  before_action :require_logged_in

  def index
    @user = User.find(params[:user_id])
    @cart_items = CartItem.where(user_id: @user[:id])
    render :index
  end

  def update
    @cart_item = CartItem.find_by(id: params[:id])
    
    if @cart_item && @cart_item.update(cart_items_params)
      render :show
    else
      render json: {errors: @cart_item.errors.full_messages}, status: :uprocessable_entity
    end
  end
  
  def create
    @cart_item = CartItem.new(cart_items_params)
    # old_item = CartItem.find_by(product_id: params[:cart_item][:product_id])

    # if old_item && old_item.size == params[:cart_item][:size]
    #   new_items_params = cart_items_params
    #   new_items_params['quantity'] += 1
    #   old_item.update(new_items_params)
    #   @cart_item = old_item
    if @cart_item.save
      # debugger
      render :show
    else
      render json: {errors: @cart_item.errors.full_messages}, status: :uprocessable_entity
    end
  end

  def destroy
    @cart_item = current_user.cart_items.find_by(id: params[:id])
    
    if @cart_item.destroy
      @cart_items = CartItem.all
      render :index
    else
      render json: {errors: @cart_item.errors.full_messages}, status: :uprocessable_entity
    end
  end

  private
  def cart_items_params
    params.require(:cart_item).permit(
      :id,
      :user_id,
      :product_id,
      :quantity,
      :image_url,
      :price,
      :product_name,
      :size
    )
  end
end
