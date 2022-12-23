class Project < ApplicationRecord
    has_many :resume_projects
    has_many :resumes, through: :resume_projects
end
