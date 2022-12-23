class ResumeProjectsController < ApplicationController
    def index
        render json: ResumeProject.all
    end
end
