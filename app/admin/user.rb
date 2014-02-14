ActiveAdmin.register User do
	menu :label =>"Incomplete profiles"
	config.sort_order = "count_desc"
	config.filters = false

	controller do
	  def scoped_collection
	    User.where(status:"INCOMPLETE")
	  end
	end
end