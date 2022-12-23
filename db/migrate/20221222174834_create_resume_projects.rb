class CreateResumeProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :resume_projects do |t|
      t.belongs_to :resume, null: false, foreign_key: true
      t.belongs_to :project, null: false, foreign_key: true
      t.string :project_image

      t.timestamps
    end
  end
end
