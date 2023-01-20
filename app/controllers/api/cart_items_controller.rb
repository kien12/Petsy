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
    @new_cart_item = CartItem.new(cart_item_params)
    if current_user
      @existing_cart_item = CartItem.all.select { |cart_item| (cart_item.user_id == current_user.id) && cart_item.product_id == @new_cart_item.product_id } 
      if @existing_cart_item.length > 0
        current_item = @existing_cart_item[0]
        new_quantity = current_item.quantity + @new_cart_item.quantity
        current_item.update(
        user_id: current_item.user_id, 
        product_id: current_item.product_id,
        quantity: new_quantity
        )
        @cart_items = CartItem.all.select { |cart_item| (cart_item.user_id == current_user.id) }
        render 'api/cart_items/index'
      elsif @new_cart_item.save
        @cart_items = CartItem.all.select { |cart_item| (cart_item.user_id == current_user.id) }
        render 'api/cart_items/index'
      else
        render json: @new_cart_item.errors.full_messages, status: 422
      end
   else
    render json: ['You must be logged in to add to cart'], status: 401
   end
  end

  private
  def cart_item_params
    params.require(:cart_item).permit(:user_id, :product_id, :quantity)
  end

end
