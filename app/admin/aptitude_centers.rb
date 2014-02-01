ActiveAdmin.register AptitudeCenters do
  permit_params :place
  index do
    column :place
    default_actions
  end
end