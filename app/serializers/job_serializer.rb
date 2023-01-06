class JobSerializer < ActiveModel::Serializer
  attributes :id, :belongs_to, :resume_id, :company, :role, :location, :description, :begin_date, :end_date, :current
end
