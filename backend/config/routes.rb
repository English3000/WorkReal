Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only:[:create]
    resources :roles, only: [:show, :index, :create, :update] do
      resources :follows, only: [:create, :destroy]
    end
    resources :projects, only: [:create, :update]
    resources :reals do
      resources :truths, only: [:create, :destroy]
    end
    resources :searches, only: [:index]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
