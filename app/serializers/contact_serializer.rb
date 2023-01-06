class ContactSerializer < ActiveModel::Serializer
  attributes :id, :resume_id, :email, :github, :website, :blog
end
