class CreateFollows < ActiveRecord::Migration[5.1]
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false
      t.integer :role_id, null: false
      t.timestamps
    end
    add_index :follows, [:role_id, :user_id], unique: true
  end
end
