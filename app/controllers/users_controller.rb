class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create, :index]
    
    def index
        render json: User.all
    end

    def show
        render json: User.find_by!(id: params[:id]), status: :ok
    end

    def create
        render json: User.create!(user_params), status: :created
    end

    def update
        user = User.find_by(id: session[:user_id]) 
        render json: user.update!(user_params), status: :accepted
    end

    private

    def user_params
        params.permit(:name, :password, :username, :email)
    end
end
