class RenameTableIdentityToUser < ActiveRecord::Migration
  def change
  	rename_table :identities,:users
  end
end
