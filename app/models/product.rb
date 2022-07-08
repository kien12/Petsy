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
  
  belongs_to :category,
    foreign_key: :category_id,
    class_name: "Category"

  belongs_to :seller,
    foreign_key: :seller_id,
    class_name: "Seller"
end
