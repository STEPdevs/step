class RenameTableUsersToOtherUserDetails < ActiveRecord::Migration
  def change
  	rename_table :users,:other_user_details
  end
end
