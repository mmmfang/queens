class Factor < ActiveRecord::Base

  validates :blurb, presence: true
  validates :mood, presence: true


  # paperclip image validation
  # validates_attachment :image, content_type: {
  #   content_type: ["image/jpeg", "image/gif", "image/png"]
  # }

  belongs_to :mood
  delegate :current_user, to: :mood
  # has_attached_file :image

end
