class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create, :index]
    
    def index
        render json: User.all
    end

    def show
        render json: current_user
    end

    def create
        render json: User.create!(user_params), status: :created
    end

    def update
        # user = User.find_by(id: session[:user_id]) 
        current_user.update(user_params)
        render json: current_user
    end

    private

    def user_params
        params.permit(:name, :password, :username, :email)
    end
end
