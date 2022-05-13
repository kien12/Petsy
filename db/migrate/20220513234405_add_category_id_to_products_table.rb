class AddCategoryIdToProductsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :category_id, :integer, null: false
    add_index :products, :category_id
  end
end
# add_column(table_name, column_name, type, **options)