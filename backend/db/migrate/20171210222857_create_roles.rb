class CreateRoles < ActiveRecord::Migration[5.1]
  def change
    create_table :roles do |t|
      t.integer :user_id
      t.string :title, null: false
      t.string :industry, null: false
      t.string :location, null: false
      t.text :review
      t.date :start_date, null: false
      t.date :end_date
      t.timestamps
    end
    add_index :roles, :user_id
  end
end
