class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.date 	:date_of_birth
      t.string :gender
      t.string :email
      t.text :address
      t.string :city
      t.string :mobile_number
      t.string :course
      t.string :year_of_pass
      t.string :preferred_aptitude_center
      t.string :preferred_gd_center
      t.timestamps
    end
    create_table :gd_centers do |t|
      t.string :place
    end
    create_table :aptitude_centers do |t|
      t.string :place
      end
    create_table :courses do |t|
      t.string :name
    end
  end
end
