class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.date 	:date_of_birth
      t.string :email
      t.string :address
      t.string :mobile_number
      t.timestamps
    end
  end
end
