Step::Application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :posts
  root to: "users#index"
  post 'user' => "users#create"  
  post 'admin/dob' => "modify#set"
  put 'user'=>"users#update"
  post 'other_user'=>"other_user_details#create"
  get 'validate' => "users#validate"
  get 'candidates_list' => "candidate#listCandidates"
  get 'candidates' => "candidate#candidates"
end
