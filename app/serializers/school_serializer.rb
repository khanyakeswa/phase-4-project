class SchoolSerializer < ActiveModel::Serializer
  attributes :id, :resume_id, :name, :degree, :graduation_date, :completed
end
