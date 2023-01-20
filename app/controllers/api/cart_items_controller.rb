class Api::CartItemsController < ApplicationController
  
  def index
    if @cart_items = CartItem.all.select { |cart_item| cart_item.user_id == current_user.id}
      render '/api/cart_items/index'
    else
      return nil
    end
  end
  #check if user is logged in
  #check if product is already in cart
  ## if true update quantity
  ## if else false add item to cart
  # error

  def create
    @cart_item = CartItem.new(cart_item_params)
    if current_user
      @existing_cart_item = CartItem.all.select { |cart_item| (cart_item.user_id == current_user.id) && cart_item.product_id == @cart_item.product_id } 
      if @existing_cart_item.length > 0
        new_quantity = @existing_cart_item[0].quantity + @cart_item.quantity
        @existing_cart_item.update(
        user_id: @existing_item.user_id, 
        product_id: @existing_item.product_id,
        quantity: new_quantity
        )
        @cart_items = CartItem.all.select { |cart_item| (cart_item.user_id == current_user.id) }
      else 
        @cart_item.save
      end
   else
    render json: ['You must be logged in to add to cart'], status: 401
  end

  private
  def cart_item_params
    params.require(:cart_item).permit(:user_id, :product_id, :quantity)
  end

end
