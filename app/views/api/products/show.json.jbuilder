json.extract! @product, :id, :name,:description, :seller_id, :price, :category_id, :quantity
json.seller_name @product.seller.name;
