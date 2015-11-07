class Factor < ActiveRecord::Base

  validates :blurb
  validates :mood
  validates :occurred_at

  # paperclip image validation
  # validates_attachment :image, content_type: {
  #   content_type: ["image/jpeg", "image/gif", "image/png"]
  # }

  belongs_to :moods
  delegate :user, to: :mood
  # has_attached_file :image

end
