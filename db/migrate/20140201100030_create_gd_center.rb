class CreateGdCenter < ActiveRecord::Migration
  def change
    create_table :gd_centers do |t|
      t.string :place
    end
  end
end
