ActiveAdmin.register State do
  permit_params :name
  menu false
  index do
    column :name
    default_actions
  end
end