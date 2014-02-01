ActiveAdmin.register_page "Candidates" do
  content do
    render "list"
  end

  page_action :update, :method => :put do
    update_count=0
    respond_to do |format|
      User.transaction do
        params[:query].values.each do |candidate|
          user=User.find(candidate[:id])
          user.update_attributes(candidate)
          update_count=+1
        end
      end
    format.html{render :partial=>'list'}
   end
  end

end