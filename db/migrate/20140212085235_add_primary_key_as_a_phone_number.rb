class AddPrimaryKeyAsAPhoneNumber < ActiveRecord::Migration
  def change
		remove_column :users, :id
    execute "ALTER TABLE users ADD PRIMARY KEY (phone_number);"
  end
end
