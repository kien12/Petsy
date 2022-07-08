# == Schema Information
#
# Table name: sellers
#
#  id   :bigint           not null, primary key
#  name :string           not null
#
class Seller < ApplicationRecord
  validates :name, presence: true

  has_many :products,
    foreign_key: :seller_id,
    class_name: "Product"
    
end
