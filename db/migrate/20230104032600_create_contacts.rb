class CreateContacts < ActiveRecord::Migration[6.1]
  def change
    create_table :contacts do |t|
      t.belongs_to :resume, null: false, foreign_key: true
      t.string :platform
      t.string :url

      t.timestamps
    end
  end
end
