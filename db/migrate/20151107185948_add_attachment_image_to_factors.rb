class AddAttachmentImageToFactors < ActiveRecord::Migration
  def self.up
    change_table :factors do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :factors, :image
  end
end
