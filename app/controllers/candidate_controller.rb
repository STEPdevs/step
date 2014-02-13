class CandidateController < ApplicationController
  def listCandidates
    @users_list=OtherUserDetails.all

    render :json => @users_list
  end

  def candidates
    render 'user/list'
  end

end