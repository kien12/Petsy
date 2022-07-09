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
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
  validates :password, length: { minimum: 6, allow_nil: true }
  
  attr_reader :password;
  after_initialize :ensure_session_token

  belongs_to :users,
    foreign_key: :user_id,
    class_name: 'User'

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    (user && user.is_password?(password) ? user : nil)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end


end
