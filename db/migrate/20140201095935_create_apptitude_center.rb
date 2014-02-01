class CreateApptitudeCenter < ActiveRecord::Migration
  def change
    create_table :aptitude_centers do |t|
      t.string :place
    end
  end
end
