class Resume < ApplicationRecord
  belongs_to :user
  has_many :resume_projects, dependent: :destroy
  has_many :projects, through: :resume_projects
end
