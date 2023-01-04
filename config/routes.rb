Rails.application.routes.draw do
  resources :projects
  resources :resume_projects
  resources :resumes, only: [:index, :sort_by_name, :sort_by_title]
  resources :users, only: [:index, :show]

  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  delete '/logout', to:'sessions#delete' 
  get '/authorized_user', to: 'users#show'
  get '/sort_by_name', to: 'resumes#sort_by_name'
  get '/sort_by_title', to: 'resumes#sort_by_title'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
