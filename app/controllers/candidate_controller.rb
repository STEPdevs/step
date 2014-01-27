class CandidateController < ApplicationController
  def listCandidates
    @users_list=User.all

    render :json => @users_list
  end

  def candidates
    render 'user/list'
  end

end