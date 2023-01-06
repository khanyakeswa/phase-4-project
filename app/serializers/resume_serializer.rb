class ResumeSerializer < ActiveModel::Serializer
  attributes :id, :title, :about, :user_image, :user_logo
  has_one :user
  has_many :resume_projects
  has_many :skills
  has_many :schools
  has_many :jobs
  has_many :contacts
end
