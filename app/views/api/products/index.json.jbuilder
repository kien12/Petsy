@products.each do |product|
  json.set! product.id do
    json.extract! product, :name, :description, :seller_id, :category_id, :quantity, :price
  end
end