class AddColumnCompleteToUsers < ActiveRecord::Migration
  def change
		add_column :users,:complete,:string,	:default => "INCOMPLETE"
  end
end
