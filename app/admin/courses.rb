ActiveAdmin.register Courses do
  permit_params :name
  index do
    column :name
    default_actions
  end
end