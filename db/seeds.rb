# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

ActiveRecord::Base.transaction do
  Category.destroy_all
  Product.destroy_all
  Seller.destroy_all
  User.destroy_all
  Review.destroy_all
  
#USERS
  user_1 = User.create!(username: 'Tommy', email: 'TommyTurnip@gmail.com', password: 'vegetables')
  user_2 = User.create!(username: 'Ken', email: 'BarbieNKen@gmail.com', password: 'barbieworld')
  user_3 = User.create!(username: 'Barbie', email: 'KenNBarbie@gmail.com', password: 'barbieworld')
  user_4 = User.create!(username: 'Admin', email: 'Admin@admin.com', password: '@Admin')
#SELLERS
  seller_1 = Seller.create!(name: 'Clifford')
  seller_2 = Seller.create!(name: 'Tony')

#CATEGORIES
  dog = Category.create!(name: 'Dogs') #id: 1
  cat = Category.create!(name: 'Cats') #id: 2
  bird = Category.create!(name: 'Birds') #id 3
  fish = Category.create!(name: 'Fishes') #id 4
  mammal = Category.create!(name: "Mammals") #id 5
#PRODUCTS
  dog_product_1 = Product.create!(
    name: 'Big Bone',
    description: "Really huge bone for your pup!", 
    seller_id: 1, 
    category_id: 1,
    quantity: 5,
    price: 21.95
  )
  dog_product_2 = Product.create!(
    name: 'Tiny Bone', 
    description: "One really tiny", 
    seller_id: 1, 
    category_id: 1, 
    quantity: 2,
    price: 10.99
  )
  dog_product_2 = Product.create!(
    name: 'Tiny Bone', 
    description: "One really tiny", 
    seller_id: 1, 
    category_id: 1, 
    quantity: 2,
    price: 10.99
  )
  dog_product_2 = Product.create!(
    name: 'Tiny Bone', 
    description: "One really tiny", 
    seller_id: 1, 
    category_id: 1, 
    quantity: 2,
    price: 10.99
  )
  dog_product_2 = Product.create!(
    name: 'Tiny Bone', 
    description: "One really tiny", 
    seller_id: 1, 
    category_id: 1, 
    quantity: 2,
    price: 10.99
  )
  dog_product_2 = Product.create!(
    name: 'Tiny Bone', 
    description: "One really tiny", 
    seller_id: 1, 
    category_id: 1, 
    quantity: 2,
    price: 10.99
  )
  dog_product_2 = Product.create!(
    name: 'Tiny Bone', 
    description: "One really tiny", 
    seller_id: 1, 
    category_id: 1, 
    quantity: 2,
    price: 10.99
  )
   
  
  cat_product_2 = Product.create!(
    name: 'Flea Collar', 
    description: "Collar that will prevent fleas", 
    seller_id: 2, 
    category_id: 2, 
    quantity: 4,
    price: 30.00
  )


 ### REVIEWS 
  review_1 = Review.create!(
    user_id: 1,
    product_id: 1,
    rating: 5,
    body: 'testing 1'
  )

  review_2 = Review.create!(
    user_id: 1,
    product_id: 1,
    rating: 5,
    body: 'testing 2'
  )
  
end