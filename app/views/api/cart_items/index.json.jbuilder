@cart_items.each do |cart_item|
  json.set! cart_item.id do
    json.extract! cart_item, :user_id, :product_id, :quantity, :id
    json.name cart_item.products.name
    json.price cart_item.products.price
    json.sellerName cart_item.products.sellers.name
    json.description cart_item.products.description
    json.photoUrls cart_item.products.photos.map { |file| url_for(file) }
  end
end