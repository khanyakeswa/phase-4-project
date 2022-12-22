Rails.application.routes.draw do
  resources :projects
  resources :resume_projects
  resources :resumes
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
