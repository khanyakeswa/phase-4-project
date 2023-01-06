class User < ApplicationRecord
    has_many :resumes, dependent: :destroy
    has_many :resume_projects, through: :resumes

    validates :name, :username, :email, :password, presence: true, on: :create
    validates :username, :email, uniqueness: true
    validates :password, presence: true, on: :create

    has_secure_password
end
