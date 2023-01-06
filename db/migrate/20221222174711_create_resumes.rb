class CreateResumes < ActiveRecord::Migration[6.1]
  def change
    create_table :resumes do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.string :about
      t.string :user_image
      t.string :user_logo

      t.timestamps
    end
  end
end
