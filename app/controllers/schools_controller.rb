class SchoolsController < ApplicationController
  def show
    render json: School.where("resume_id = ?", params[:resume_id])
  end

  def create
    render json:
             School.create!(
               params.permit(
                 :resume_id,
                 :name,
                 :degree,
                 :graduation_date,
                 :completed,
               ),
             )
  end
end
