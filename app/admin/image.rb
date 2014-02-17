ActiveAdmin.register Image do 
	form do |f|
		f.inputs "New Image" do
			f.input :image, as: :file
		end
		f.actions
	end
end