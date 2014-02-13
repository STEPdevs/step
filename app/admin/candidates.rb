ActiveAdmin.register_page "Candidates" do


  content do
    render "list"
  end

  page_action :update, :method => :put do
    update_count=0
    OtherUserDetails.transaction do
      params[:query].values.each do |candidate|
        user=OtherUserDetails.find(candidate[:id])
        user.update_attributes(candidate)
        update_count=+1
      end
    end
    respond_to do |format|
      format.html{render :partial=>'list',:status=>200}
      format.json{render :json=> update_count}
    end
  end
end