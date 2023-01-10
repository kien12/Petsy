@category.products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :description, :seller_id, :category_id, :quantity, :price
    json.photoUrls product.photos.map { |file| url_for(file) }
    json.seller_name product.sellers.name;
  end
end



