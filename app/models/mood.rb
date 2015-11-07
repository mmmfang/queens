class Mood < ActiveRecord::Base
  validates :happiness
  validates :user, presence: true


  belongs_to :user
  has_many :factors, dependent: :destroy
end
