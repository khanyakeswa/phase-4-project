class ProjectsController < ApplicationController
  skip_before_action :authorized_user, only: [:create]
  def index
    render json: Project.all
  end
  def sort_by_project_name
    render json: Project.all.sort_by {|m| m.name.downcase}
  end

end
