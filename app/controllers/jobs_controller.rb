class JobsController < ApplicationController
  def show
    render json: Job.where("resume_id = ?", params[:resume_id])
  end

  def create
    render json:
             Job.create!(
               params.permit(
                 :resume_id,
                 :company,
                 :role,
                 :location,
                 :description,
                 :begin_date,
                 :end_date,
                 :current,
               ),
             )
  end
end
