class ResumesController < ApplicationController
  def index
    render json: Resume.all
  end

  def show
    render json: Resume.find_by(user_id: session[:user_id])
  end

  def create
    render json: Resume.create!(user_id: params[:user_id], title: params[:title], about: params[:about]), status: :created
  end

  private

  # def create_skills
  #     params[:skills].each do |skill|
  #         Skill.create!(skill[:resume_id, :name, :score])
  #     end
  # end
end
