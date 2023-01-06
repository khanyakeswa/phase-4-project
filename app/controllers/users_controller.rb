class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create, :index]
    
    def index
        render json: User.all
    end
    
    def show 
        render json: current_user, status: :ok
    end 

    def create
        render json: User.create!(user_params), status: :created
    end

    def update
        current_user.update(user_params)
        render json: current_user, status: :accepted
    end

    def destroy
        current_user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:name, :password, :username, :email, :about, :image_url)
    end
end
