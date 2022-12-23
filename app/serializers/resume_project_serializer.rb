class ResumeProjectSerializer < ActiveModel::Serializer
  attributes :id, :project_image
  has_one :project
  has_one :resume
end
