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

ActiveRecord::Schema.define(version: 2023_01_04_051145) do

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.integer "record_id", null: false
    t.integer "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.integer "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "contacts", force: :cascade do |t|
    t.integer "resume_id", null: false
    t.string "platform"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["resume_id"], name: "index_contacts_on_resume_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.integer "resume_id", null: false
    t.string "company"
    t.string "role"
    t.string "location"
    t.text "description"
    t.string "begin_date"
    t.string "end_date"
    t.boolean "current"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["resume_id"], name: "index_jobs_on_resume_id"
  end

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
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_resumes_on_user_id"
  end

  create_table "schools", force: :cascade do |t|
    t.integer "resume_id", null: false
    t.string "name"
    t.string "degree"
    t.string "graduation_date"
    t.boolean "completed"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["resume_id"], name: "index_schools_on_resume_id"
  end

  create_table "skills", force: :cascade do |t|
    t.integer "resume_id", null: false
    t.string "name"
    t.integer "score"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["resume_id"], name: "index_skills_on_resume_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "contacts", "resumes"
  add_foreign_key "jobs", "resumes"
  add_foreign_key "resume_projects", "projects"
  add_foreign_key "resume_projects", "resumes"
  add_foreign_key "resumes", "users"
  add_foreign_key "schools", "resumes"
  add_foreign_key "skills", "resumes"
end
