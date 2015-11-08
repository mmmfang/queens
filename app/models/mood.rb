class Mood < ActiveRecord::Base
  validates :happiness, presence: true



  belongs_to :user, foreign_key: :user_id
  has_many :factors, dependent: :destroy
end
