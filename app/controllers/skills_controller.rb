class SkillsController < ApplicationController
  def show
    render json: Skill.where('resume_id = ?', params[:resume_id])
  end

  def create
    newSkills =
      params[:skills].map do |skill|
        Skill.create!(
               resume_id: 3,
               name: skill[:name],
               score: skill[:score],
             )
      end
  end
end
