class Api::CartItemsController < ApplicationController

  before_action :require_logged_in

  def index
    @user = User.find(params[:user_id])
    @cart_items = CartItem.where(user_id: @user[:id])
    render :index
  end

  def update
    # debugger
    @cart_item = CartItem.find_by(id: params[:id])
    
    if @cart_item && @cart_item.update(cart_items_params)
      render :show
    else
      render json: {errors: @cart_item.errors.full_messages}, status: :uprocessable_entity
    end
  end
  
  def create
    # debugger
    @cart_item = CartItem.new(cart_items_params)
    old_item = CartItem.find_by(product_id: params[:cart_item][:product_id])
    if old_item 
      old_item.update(cart_items_params)
      @cart_item = old_item
    else
      if !@cart_item.save 
      render json: {errors: @cart_item.errors.full_messages}, status: :uprocessable_entity
      end
    end
    render :show
    # if @cart_item.save
    #   render :show
    # else
    #   render json: {errors: @cart_item.errors.full_messages}, status: :uprocessable_entity
    # end
  end

  def destroy
    # debugger
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
      :quantity
    )
  end
end
