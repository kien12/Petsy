class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    if @review.save
      render '/api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end
#does not work
  def index
    @reviews = Review.all
    render '/api/reviews/index'
  end

  def show
    @review = Review.find_by(id: params[:id])
    render '/api/reviews/show'
  end

  def update
    @review = Review.find_by(id: params[:id])
    if !@review.nil? && @review.update(review_params)
      render '/api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    if @review
      @review.delete
    else
      render json: ['Review does not exist'], status: 422
    end
  end



  private

  def review_params
    params.require(:review).permit(:user_id, :product_id, :rating, :body)
  end


end
