Rails.application.routes.draw do
  resources :jobs
  resources :contacts
  resources :skills
  resources :schools
  resources :projects
  resources :resume_projects
  resources :resumes, only: [:index]
  resources :users, only: [:index, :show]

  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  delete '/logout', to:'sessions#delete' 
  get '/authorized_user', to: 'users#show'
  post '/submit_resume', to: 'resumes#create'
  post '/submit_resume_skills', to: 'skills#create'
  post '/submit_resume_schools', to: 'schools#create'
  post '/submit_resume_jobs', to: 'jobs#create'
  post '/submit_resume_contacts', to: 'contacts#create'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
