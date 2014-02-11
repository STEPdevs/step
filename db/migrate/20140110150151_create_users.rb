class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.date 	:date_of_birth
      t.string :gender
      t.string :email
      t.string :city
      t.string :course
      t.string :year_of_pass
      t.string :preferred_aptitude_center
      t.string :preferred_gd_center
      t.belongs_to :user
      t.timestamps
    end
  end
end
