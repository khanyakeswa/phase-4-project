class SkillsController < ApplicationController
  def show
    render json: Skill.where("resume_id = ?", params[:resume_id])
  end

  def create
    render json: Skill.create!(params.permit(:resume_id, :name, :score))
  end
end
