# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  seller_id   :integer          not null
#  price       :decimal(10, 2)   not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :integer          not null
#  quantity    :integer          not null
#
class Product < ApplicationRecord
  validates :name, :description, :seller_id, :category_id, presence: true
  
  has_many :cart_items,
    foreign_key: :product_id,
    class_name: "Product"

  belongs_to :category,
    foreign_key: :category_id,
    class_name: "Category"

  belongs_to :sellers,
    foreign_key: :seller_id,
    class_name: "Seller"

  has_many :reviews,
    foreign_key: :product_id,
    class_name: 'Review'

  has_many_attached :photos
end
