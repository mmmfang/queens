class CreateMoods < ActiveRecord::Migration
  def change
    create_table :moods do |t|
      t.references :user, index: true, foreign_key: true #foreign_key user_id
      t.integer :happiness, null: false

      t.timestamps null: false
    end
  end
end
