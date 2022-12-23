# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_12_22_174933) do

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.string "collaborators"
    t.string "project_data"
    t.string "project_video"
    t.string "project_link"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "resume_projects", force: :cascade do |t|
    t.integer "resume_id", null: false
    t.integer "project_id", null: false
    t.string "project_image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_resume_projects_on_project_id"
    t.index ["resume_id"], name: "index_resume_projects_on_resume_id"
  end

  create_table "resumes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "title"
    t.string "about"
    t.string "user_image"
    t.string "user_logo"
    t.string "education"
    t.string "skills"
    t.string "experience"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_resumes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "resume_projects", "projects"
  add_foreign_key "resume_projects", "resumes"
  add_foreign_key "resumes", "users"
end
