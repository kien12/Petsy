@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id,  :body, :user_id, :product_id, :rating, :created_at, :updated_at
    json.author review.users.username
    json.photos review.users.photos.map { |file| url_for(file) }
  end
end



# json.extract! @review, :id, :body, :author_id, :product_id, :rating, :created_at, :updated_at