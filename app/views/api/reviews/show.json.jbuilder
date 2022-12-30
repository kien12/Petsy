  json.extract! @review, :id,  :body, :user_id, :product_id, :rating, :created_at, :updated_at
  json.extract! @review.users, :username, :photos