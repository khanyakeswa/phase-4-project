class Resume < ApplicationRecord
  belongs_to :user
  has_many :resume_projects, dependent: :destroy
  has_many :projects, through: :resume_projects
  has_many :schools
  has_many :skills
  has_many :contacts
  has_many :jobs
end
