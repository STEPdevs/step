Step::Application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :posts
  root to: "user#index"
  post 'user' => "user#create"
end
