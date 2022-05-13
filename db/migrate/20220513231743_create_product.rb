class CreateProduct < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :seller_id, null: false
      t.decimal :price, precision: 10, scale: 2, null: false
      t.timestamps
    end
    
    add_index :products, [:seller_id, :name]
    add_index :products, :name
  end

end

