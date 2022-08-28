class ReviewsController < ApplicationController

  def create
    @review = Review.new(product_params)
    if @product.save
      render '/api/reviews'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.all
  end

  def show
    @review = Review.find_by(id: params[:id])
    render '/api/reviews/:id'
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    
    if @review
      @review.delete
    else
      render json: ['Review does not exist'], status: 422
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    if !@review.nil? && @review.update(review_params)
      render '/api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end


  private

  def product_params
    params.require(:review).permit(:user_id, :product_id, :rating, :body)
  end


end
