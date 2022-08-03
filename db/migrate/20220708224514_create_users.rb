class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end

    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :password_digest, unique: true
  end
end

# users			
# id	interger	not null, primary key	
# username	string	not null, indexed, unique	
# email	string	not null, indexed, unique	
# password_digest	string	not null	
# session_token	string	not null, indexed, unique	
# created_at	datetime	not null	
# updated_at	datetime	not null	