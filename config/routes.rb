Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :categories, only: [:index, :show]
    resources :products, only: [:create, :index, :show, :update, :destroy]
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :reviews, only: [:create, :index, :destroy, :update, :show]
    resources :cart_items, only: [:create, :index, :destroy, :update]
  end
  
    
end
