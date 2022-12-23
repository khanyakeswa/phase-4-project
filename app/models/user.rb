class User < ApplicationRecord
    has_many :resumes
    has_many :resume_projects, through: :resumes
end
