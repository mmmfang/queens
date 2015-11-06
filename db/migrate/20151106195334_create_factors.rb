class CreateFactors < ActiveRecord::Migration
  def change
    create_table :factors do |t|
      t.references :mood, index: true, foreign_key: true
      t.text :blurb

      t.timestamps null: false
    end
  end
end
