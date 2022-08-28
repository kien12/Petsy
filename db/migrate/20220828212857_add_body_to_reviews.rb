class AddBodyToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :body, :text
  end
end
