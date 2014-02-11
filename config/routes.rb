Step::Application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :posts
  root to: "users#index"
  post 'user' => "users#create"  
  put 'user'=>"users#update"
  get 'validate' => "users#validate"
  get 'candidates_list' => "candidate#listCandidates"
  get 'candidates' => "candidate#candidates"
end
