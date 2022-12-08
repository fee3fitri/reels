class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    if (params[:category] === 'womens')
      @products = Product.where(
        "category = 'Women'" 
      ) 
    else
      @products = Product.where(
        "category = 'Men'" 
      ) 
    end
    render :index
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end

  def search
    query = params[:query]
    @products = Product.where("name ILIKE ?", "%#{query}%")
    render :index
  end
end