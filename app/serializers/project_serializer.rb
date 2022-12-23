class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :collaborators, :project_data, :project_link, :project_video
end
