Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    # Auth routes
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :products, only: [:show, :index]
  end

  # Resources

  get '*path', to: "static_pages#frontend_index"

end
