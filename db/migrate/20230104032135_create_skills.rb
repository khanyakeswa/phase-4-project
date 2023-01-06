class CreateSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :skills do |t|
      t.belongs_to :resume, null: false, foreign_key: true
      t.string :name
      t.integer :score

      t.timestamps
    end
  end
end
