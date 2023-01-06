class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.belongs_to :resume, null: false, foreign_key: true
      t.string :company
      t.string :role
      t.string :location
      t.text :description
      t.string :begin_date
      t.string :end_date
      t.boolean :current

      t.timestamps
    end
  end
end
