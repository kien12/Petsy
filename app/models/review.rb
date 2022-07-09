# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#  product_id :integer          not null
#  rating     :integer          not null
#
class Review < ApplicationRecord
  validates :user_id, :product_id, :rating, presence: true
  
  
  

  belongs_to :users,
    foreign_key: :user_id,
    class_name: 'User'

  

end
