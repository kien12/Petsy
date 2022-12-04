class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render "/api/products/index"
  end

  def show
    @product = Product.with_attached_photos.find_by(id: params[:id])

    render '/api/products/show'
  end

  private
  def product_params
    params.require(:product).permit(:name,:description, :seller_id, :price, :category_id, :quantity, photos: [])
  end
  
end
