class CreateTruths < ActiveRecord::Migration[5.1]
  def change
    create_table :truths do |t|
      t.integer :user_id, null: false
      t.integer :real_id, null: false

      t.timestamps
    end
    add_index :truths, [:real_id, :user_id], unique: true
  end
end
