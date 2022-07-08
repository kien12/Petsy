class Addtablestoreviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :user_id, :integer, null: false
    add_column :reviews, :product_id, :integer, null: false
    add_column :reviews, :rating, :integer, null: false  
    add_index :reviews, :user_id
  end

end

# body	text		
# user_id	integer	not null, foreign key	
# product_id	integer	not null, foreign key	
# rating	integer	not null	