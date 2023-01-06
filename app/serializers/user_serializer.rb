class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password, :about, :image_url
end
