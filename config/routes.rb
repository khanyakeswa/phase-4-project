Rails.application.routes.draw do
  resources :projects
  resources :resume_projects
  resources :resumes
  resources :users

  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  delete '/logout', to:'sessions#delete' 
  get '/authorized_user', to: 'users#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
