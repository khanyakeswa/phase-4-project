class ContactSerializer < ActiveModel::Serializer
  attributes :id, :resume_id, :platform, :url
end
