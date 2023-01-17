class Api::CartItemsController < ApplicationController
  
  def index
    if @cart_items = CartItem.all.select { |cart_item| cart_item.user_id == current_user.id}
      render '/api/cart_items/index'
    else
      return nil
    end
  end


  private
  def cart_item_params
    params.require(:cart_item).permit(:user_id, :product_id, :quantity)
  end

end
