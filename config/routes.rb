Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'games#index'
  get '/games', to: 'games#index'

  namespace :games do
    resources :rps, as: 'rps', except: [:edit,:destroy,:update]
  end
end
