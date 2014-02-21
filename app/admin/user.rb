ActiveAdmin.register User do
	menu :label =>" Incomplete Profiles"
	config.sort_order = "count_desc"
	config.filters = false
	index do
		column :phone_number
		column :count
		column :status
		column :created_at
		column :updated_at
		default_actions
	end

	controller do
	  def scoped_collection
	    User.where(status:"INCOMPLETE")
	  end
	end
end