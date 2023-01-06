Rails.application.routes.draw do
  resources :jobs
  resources :contacts
  resources :skills
  resources :schools
  resources :projects
  resources :resume_projects
  resources :resumes, only: [:index, :sort_by_name, :sort_by_title, :user_index, :show]
  resources :users, only: [:index, :show, :update, :create]

  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  delete '/logout', to:'sessions#delete' 
  get '/authorized_user', to: 'users#show'
  get '/sort_by_name', to: 'resumes#sort_by_name'
  get '/sort_by_project_name', to: 'projects#sort_by_project_name'
  get '/sort_by_title', to: 'resumes#sort_by_title'
  patch '/update_user', to: 'users#update'
  post '/submit_resume', to: 'resumes#create'
  get '/user_resumes', to: 'resumes#user_index'
  delete 'destroy-user', to: 'users#destroy'
  post '/add_project', to: 'resume_projects#create'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
