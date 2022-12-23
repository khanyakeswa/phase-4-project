class Project < ApplicationRecord
    has_many :resume_projects, dependent: :destroy
    has_many :resumes, through: :resume_projects
end
