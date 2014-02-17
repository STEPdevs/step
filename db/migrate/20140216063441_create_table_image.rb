class CreateTableImage < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :url
    end
  end
end
