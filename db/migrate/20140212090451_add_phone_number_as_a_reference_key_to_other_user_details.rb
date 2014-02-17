class AddPhoneNumberAsAReferenceKeyToOtherUserDetails < ActiveRecord::Migration
  def change
		add_column :other_user_details, :users_phone_number,:string,:null => false
		execute "ALTER TABLE other_user_details ADD CONSTRAINT fk_phone FOREIGN KEY (users_phone_number) REFERENCES users(phone_number)"
  end
end