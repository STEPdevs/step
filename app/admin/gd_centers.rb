ActiveAdmin.register GdCenters do
  permit_params :place
  menu false
  index do
    column :place
    default_actions
  end
end