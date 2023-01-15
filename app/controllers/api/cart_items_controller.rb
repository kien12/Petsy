class Api::CartItemsController < ApplicationController
  
  def index
    if @cart_items = CartItem.all.select { |cart_item| cart_item.user_id == currentUser.id}
      render '/api/cart_items/index'
    else
      return nil
    end
  end

  def create
    @cart_item = CartItem.new(cart_item_params)
  end

  private
  def cart_item_params
    params.require(:cart_item).permit(:user_id, :product_id, :quantity)
  end

end
