class User < ApplicationRecord
    has_many :resumes, dependent: :destroy
    has_many :resume_projects, through: :resumes

    validates :name, :username, :email, :password, presence: true
    validates :username, :email, uniqueness: true

    has_secure_password
end
