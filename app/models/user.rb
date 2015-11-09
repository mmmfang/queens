class User < ActiveRecord::Base
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true

  validates :password, length: {
    minimum: 8, allow_nil: true
  }

  has_many :moods, dependent: :destroy
  has_many :factors, through: :moods
end
