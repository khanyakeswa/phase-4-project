class ResumeSerializer < ActiveModel::Serializer
  attributes :id, :title, :about, :user_image, :user_logo, :education, :skills, :experience
  has_one :user
  has_many :resume_projects
end
