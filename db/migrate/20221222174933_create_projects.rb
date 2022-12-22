class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :collaborators
      t.string :project_data
      t.string :project_video
      t.string :project_link

      t.timestamps
    end
  end
end
