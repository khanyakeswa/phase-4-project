Rails.application.routes.draw do
  resources :jobs
  resources :contacts
  resources :skills
  resources :schools
  resources :projects
  resources :resume_projects
  resources :resumes
  resources :users, only: [:index, :show]

  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  delete '/logout', to:'sessions#delete' 
  get '/authorized_user', to: 'users#show'
  post '/submit_resume', to: 'resumes#create'
  get '/user_resumes', to: 'resumes#user_index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
