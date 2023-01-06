class CreateSchools < ActiveRecord::Migration[6.1]
  def change
    create_table :schools do |t|
      t.belongs_to :resume, null: false, foreign_key: true
      t.string :name
      t.string :degree
      t.string :graduation_date
      t.boolean :completed

      t.timestamps
    end
  end
end
