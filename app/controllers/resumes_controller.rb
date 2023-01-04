class ResumesController < ApplicationController

    def index
        render json: Resume.all
    end


end
