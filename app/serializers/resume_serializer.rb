class ResumeSerializer < ActiveModel::Serializer
  attributes :id, :title, :about, :user_image, :user_logo
  has_one :user
end
