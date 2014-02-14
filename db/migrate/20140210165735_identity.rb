class Identity < ActiveRecord::Migration
  def change
  	create_table :identities do |t|
      t.string :phone_number
      t.integer :count,default: 0
      t.timestamps
    end
  end
end