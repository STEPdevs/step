class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.date 	:date_of_birth
      t.string :email
      t.text :address
      t.string :city
      t.string :mobile_number
      t.string :course
      t.string :yearOfPass
      t.string :preferredAptitudeCenter
      t.string :preferredGDCenter

      t.timestamps
    end
  end
end
