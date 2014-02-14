class RenameColumnCompleteToStatusInUser < ActiveRecord::Migration
  def change
  	rename_column :users,:complete,:status
  end
end
