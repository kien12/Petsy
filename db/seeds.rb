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
  
  
end