Rails.application.routes.draw do

  root 'static_pages#home'

  get     '/home',    to: 'static_pages#home'
  get     '/design'    , to: 'static_pages#design'
  get     '/team'    , to: 'static_pages#team'
  get     '/designers'    , to: 'static_pages#designers'

end
