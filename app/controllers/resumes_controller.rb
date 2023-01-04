class ResumesController < ApplicationController

    def index
        render json: Resume.all
    end

    def sort_by_name
        render json: Resume.all.sort_by {|m| m.user.name.downcase}
    end

    def sort_by_title
        render json: Resume.all.sort_by {|m| m.title.downcase}
    end
end
