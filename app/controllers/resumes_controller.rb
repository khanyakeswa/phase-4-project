class ResumesController < ApplicationController
  def index
    render json: Resume.all
  end

  def user_index
    render json: Resume.where(user_id: session[:user_id])
  end

  def show
    render json: Resume.find_by(id: params[:id])
    # render json: Resume.find_by(user_id: session[:user_id]).includes(:skills, :schools, :jobs, :contacts)
  end

  def create
    newResume =
      Resume.create!(
        user_id: params[:user_id],
        title: params[:title],
        about: params[:about],
      )
    render json: newResume, status: :created
    params[:skills].map do |skill|
      Skill.create!(
        resume_id: newResume[:id],
        name: skill[:name],
        score: skill[:score],
      )
    end
    params[:schools].map do |school|
      School.create!(
        resume_id: newResume[:id],
        name: school[:name],
        degree: school[:degree],
        graduation_date: school[:graduation_date],
        completed: school[:completed],
      )
    end
    params[:jobs].map do |job|
      Job.create!(
        resume_id: newResume[:id],
        company: job[:company],
        role: job[:role],
        location: job[:location],
        description: job[:description],
        begin_date: job[:begin_date],
        end_date: job[:end_date],
        current: job[:current],
      )
    end
    params[:contacts].map do |contact|
      Contact.create!(
        resume_id: newResume[:id],
        platform: contact[:platform],
        url: contact[:url],
      )
    end
  end

    def sort_by_name
        render json: Resume.all.sort_by {|m| m.user.name.downcase}
    end

    def sort_by_title
        render json: Resume.all.sort_by {|m| m.title.downcase}
    end

end
