Rails.application.routes.draw do 
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: [:create, :destroy] 
    end
  end

  # The code below will route requests that aren't for exisiting paths
  # predefined in the exisitng API back to the index path.
  # This will help with routing to the react component without interfering with the rails routes for the API.
  # This may not be the best solution, but it works. It would be good to look into other solutions after this practice.
  get '*path', to: 'pages#index', via: :all
end
