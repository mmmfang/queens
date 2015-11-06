class Factor < ActiveRecord::Base
  validates :blurb, presence: true,
  validates :mood, presence: true

  belongs_to :moods
  delegate :user, to: :mood

end
