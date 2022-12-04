json.extract! @product, :id, :name,:description, :seller_id, :price, :category_id, :quantity
json.seller_name @product.seller.name;
json.photoUrls @product.photos.map { |file| url_for(file) } 


# json.reviews do
#   @product.reviews.each do |review|
#     json.set! review.id do
#       json.extract! review, :id, :product_id, :user_id, :rating, :body
#     end
#   end
# end

json.reviews do
    json.array! @product.reviews, :id, :product_id, :user_id, :rating, :body, :created_at
end


  