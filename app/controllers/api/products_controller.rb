class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render "/api/products/index"
  end

  # def show

  # end

  private
  
end
