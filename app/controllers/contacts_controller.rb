class ContactsController < ApplicationController
    def show
        render json: Contact.where("resume_id = ?", params[:resume_id])
      end
    
      def create
        render json: Contact.create!(params.permit(:resume_id, :platform, :url))
      end
end
