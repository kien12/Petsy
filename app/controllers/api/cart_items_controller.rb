class Api::CartItemsController < ApplicationController
  def create
    @cart_item = Cart_item.new(cart_item_params)
  end

  private
  def cart_item_params
    params.require(:cart_item).permit(:user_id, :product_id, :quantity)
  end

end
