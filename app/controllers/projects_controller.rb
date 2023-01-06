class ProjectsController < ApplicationController
  skip_before_action :authorized_user, only: [:create, :index, :sort_by_project_name]
  def index
    render json: Project.all
  end

  def sort_by_project_name
    render json: Project.all.sort_by {|m| m.name.downcase}
  end

  # def create
  #   render json: Project.
  # end

  private

  def project_params
  end

end
