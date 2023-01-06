class ResumeProjectsController < ApplicationController
    def index
        render json: ResumeProject.all
    end

    def create
        resume_project = ResumeProject.create!(resume_id: params[:resume_id] project_id: params[:project_id] project_image: params[:project_image])
        render json: resume_project, status :created
    end
end
