class CreateReals < ActiveRecord::Migration[5.1]
  def change
    create_table :reals do |t|
      t.integer :role_id, null: false
      t.integer :project_id, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :reals, :role_id
    add_index :reals, :project_id
  end
end
