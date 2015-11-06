class CreateMoods < ActiveRecord::Migration
  def change
    create_table :moods do |t|
      t.references :user, index: true, foreign_key: true
      t.integer :happiness, null: false

      t.timestamps null: false
    end
  end
end
