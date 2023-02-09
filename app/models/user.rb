# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password;
  after_initialize :ensure_session_token

  has_many_attached :photos

  has_many :cart_items,
    foreign_key: :user_id,
    class_name: "CartItem"

  has_many :products,
    foreign_key: :user_id,
    class_name: 'Product'

  has_many :reviews,
    foreign_key: :user_id,
    class_name: 'Review'

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
