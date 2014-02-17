class AddColumnToOtherUsersTable < ActiveRecord::Migration
    def change
      add_column :other_user_details, :alt_phone_number,:string
    end
end
