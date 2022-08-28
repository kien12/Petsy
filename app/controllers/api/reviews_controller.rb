class ReviewsController < ApplicationController

  def create

  end

  def destoroy

  end

  def update

  end

  def show

  end

  private

  def product_params
    params.require(:review).permit(:use)
  end


end
