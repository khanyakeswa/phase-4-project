class SkillSerializer < ActiveModel::Serializer
  attributes :id, :resume_id, :name, :score
end
