class ProjectsController < ApplicationController
  skip_before_action :authorized_user, only: [:create]
  def index
    render json: Project.all
  end
end
