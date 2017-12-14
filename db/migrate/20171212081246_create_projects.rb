class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.integer :role_id, null: false
      t.string :project, null: false
      t.string :location
      t.date :start_date, null: false
      t.date :end_date
      t.text :review
      t.integer :rating
      t.timestamps
    end
    add_index :projects, :role_id
  end
end
