class SkillsController < ApplicationController
  ActionController::Parameters.permit_all_parameters = true
  
  def show
    render json: Skill.where('resume_id = ?', params[:resume_id])
  end

  def create
    byebug
    newSkills =
      params[:skills].map do |skill|
        Skill.create!(
               resume_id: params[:resume_id],
               name: skill[:name],
               score: skill[:score],
             )
      end
  end
end
