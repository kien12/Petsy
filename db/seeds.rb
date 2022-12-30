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
  user_1 = User.create!(username: 'Kakarot', email: 'kakarot@gmail.com', password: 'vegetables')
  goku = open('https://petsy-dev.s3.us-west-1.amazonaws.com/profile_pictures/goku.jpg')
  user_1.photos.attach(io: goku, filename: 'goku.jpg')

  user_2 = User.create!(username: 'Vegeta', email: 'vegeta@gmail.com', password: 'vegeta')
  vegeta = open('https://petsy-dev.s3.us-west-1.amazonaws.com/profile_pictures/vegeta.jpg')
  user_2.photos.attach(io: vegeta, filename: 'vegeta.jpg')

  user_3 = User.create!(username: 'Piccolo', email: 'piccolo@gmail.com', password: 'piccolo')
  piccolo = open('https://petsy-dev.s3.us-west-1.amazonaws.com/profile_pictures/piccolo.jpg')
  user_3.photos.attach(io: piccolo, filename: 'piccolo.jpg')

  user_4 = User.create!(username: 'Admin', email: 'Admin@Admin.com', password: '@Admin')
  admin = open('https://petsy-dev.s3.us-west-1.amazonaws.com/profile_pictures/defaultpicture.jpg')
  user_4.photos.attach(io: admin, filename: 'defaultpicture.jpg')

  user_5 = User.create!(username: 'Spider-Man', email: 'demo@demo.com', password: '@SpiderMan')
  spiderman = open('https://petsy-dev.s3.us-west-1.amazonaws.com/profile_pictures/spiderman.jpg')
  user_5.photos.attach(io: spiderman, filename: 'spiderman.jpg')

  user_6 = User.create!(username: 'Naruto', email: 'Naruto@naruto.com', password: 'naruto22')
  naruto = open('https://petsy-dev.s3.us-west-1.amazonaws.com/profile_pictures/naruto.jpg')
  user_6.photos.attach(io: naruto, filename: 'naruto.jpg')

#SELLERS
  seller_1 = Seller.create!(name: 'Clifford')
  seller_2 = Seller.create!(name: 'Ember')
  seller_3 = Seller.create!(name: 'Ash')
  seller_4 = Seller.create!(name: 'Yoshi')

#CATEGORIES
  nature = Category.create!(name: 'Nature') #id: 1
  landscape = Category.create!(name: 'Landscape') #id: 2
  modern = Category.create!(name: 'Modern') #id 3
  paint = Category.create!(name: "Paint") #id 4
  blackWhite = Category.create!(name: 'Black & White') #id 5
  miscellaneous = Category.create!(name: "Miscellaneous") #id 6
  ######### SPLASH PRODUCTS

    nature11 = Product.create!(
    name: 'River flows through Switzerland',
    description: "Picture taken by Clifford of the beautiful mountains in Switzerland during the summer time.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 5,
    price: 21.95
  ) 
  nature_11 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature11.jpg')
  nature11.photos.attach(io: nature_11, filename: 'nature11.jpg')

    blackwhite1 = Product.create!(
    name: 'The Walk',
    description: "a man walking into a modern museum.", 
    seller_id: 1, 
    category_id: 5,
    quantity: 8,
    price: 25.95
  ) 
  blackwhite_1 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/blackwhite/blackwhite1.jpg')
  blackwhite1.photos.attach(io: blackwhite_1, filename: 'blackwhite1.jpg')

  street1 = Product.create!(
    name: 'Lunar New Year',
    description: "Picture taken by Clifford of a night in New York City's China Town.", 
    seller_id: 2, 
    category_id: 2,
    quantity: 3,
    price: 15.95
  ) 
  street_1 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street1.jpg')
  street1.photos.attach(io: street_1, filename: 'street1.jpg')

  nature9 = Product.create!(
    name: 'Winter is coming',
    description: "Majestic mountains of Tibet.", 
    seller_id: 2, 
    category_id: 1,
    quantity: 25,
    price: 65.95
  ) 
  nature_9 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature9.jpg')
  nature9.photos.attach(io: nature_9, filename: 'nature9.jpg')

  blackwhite2 = Product.create!(
    name: 'Capture your moment!',
    description: "a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 5,
    quantity: 9,
    price: 52.95
  ) 
  blackwhite_2 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/blackwhite/blackwhite2.jpg')
  blackwhite2.photos.attach(io: blackwhite_2, filename: 'blackwhite2.jpg')

  street2 = Product.create!(
    name: 'Lunar New Year!',
    description: "Laterns during the Lunar Festival in San Francisco's China Town.", 
    seller_id: 2, 
    category_id: 2,
    quantity: 9,
    price: 122.95
  ) 
  street_2 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street2.jpg')
  street2.photos.attach(io: street_2, filename: 'street2.jpg')

  nature8 = Product.create!(
    name: 'Time',
    description: "inspired that there is beauty in everything. There just has to be time for a seed to grow and blossom into a beautiful field.", 
    seller_id: 3, 
    category_id: 1,
    quantity: 9,
    price: 55.95
  ) 
  nature_8 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature8.jpg')
  nature8.photos.attach(io: nature_8, filename: 'nature8.jpg')

  paint1 = Product.create!(
    name: 'Fox!',
    description: "Bring the joy of happiness.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 6,
    price: 122.95
  ) 
  paint_1 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint1.jpg')
  paint1.photos.attach(io: paint_1, filename: 'paint1.jpg')

  misq2 = Product.create!(
    name: 'Dratini',
    description: "Brought to you by or very own Ash.", 
    seller_id: 1, 
    category_id: 4,
    quantity: 25,
    price: 9.95
  ) 
  misq_2 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/misq/misq2.jpg')
  misq2.photos.attach(io: misq_2, filename: 'misq2.jpg')


  nature7 = Product.create!(
    name: 'Sunflower',
    description: "One of the biggest sunflowers ever! Amazing beautiful colors with vibrant details!", 
    seller_id: 4, 
    category_id: 1,
    quantity: 25,
    price: 64.95
  ) 
  nature_7 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature7.jpg')
  nature7.photos.attach(io: nature_7, filename: 'nature7.jpg')

  nature2 = Product.create!(
    name: 'River flows in you',
    description: "Taken in Japan during the Winter Cherry Blossom season!", 
    seller_id: 4, 
    category_id: 1,
    quantity: 25,
    price: 37.95
  ) 
  nature_2 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature2.jpg')
  nature2.photos.attach(io: nature_2, filename: 'nature2.jpg')

  nature12 = Product.create!(
    name: "Land's end",
    description: "Tavan Bogd the mountains Mongolia, displaying the quiet nature of it's land.", 
    seller_id: 4, 
    category_id: 1,
    quantity: 25,
    price: 60.95
  ) 
  nature_12 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature12.jpg')
  nature12.photos.attach(io: nature_12, filename: 'nature12.jpg')

  nature3 = Product.create!(
    name: "Majestic Horizon",
    description: "Birds flying across the horizon during the sunset in Africa. Ever flew too close to the sun?", 
    seller_id: 4, 
    category_id: 1,
    quantity: 99,
    price: 99.95
  ) 
  nature_3 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature3.jpg')
  nature3.photos.attach(io: nature_3, filename: 'nature3.jpg')


  nature4 = Product.create!(
    name: "First Spring",
    description: "Reflection of the first day of spring in Switzerland.", 
    seller_id: 4, 
    category_id: 1,
    quantity: 99,
    price: 57.95
  ) 
  nature_4 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature4.jpg')
  nature4.photos.attach(io: nature_4, filename: 'nature4.jpg')

  nature5 = Product.create!(
    name: "Lone Buffalo",
    description: "Stunning photogenic buffalo wandering the mountains of Nepal.", 
    seller_id: 4, 
    category_id: 1,
    quantity: 99,
    price: 88.95
  ) 
  nature_5 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature5.jpg')
  nature5.photos.attach(io: nature_5, filename: 'nature5.jpg')

  nature6 = Product.create!(
    name: "Spring is here!",
    description: "In the plains of sunny California orange tulips blossom every year!", 
    seller_id: 4, 
    category_id: 1,
    quantity: 99,
    price: 12.95
  ) 
  nature_6 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature6.jpg')
  nature6.photos.attach(io: nature_6, filename: 'nature6.jpg')

  nature13 = Product.create!(
    name: "Amazons",
    description: "The green calm waters of the amazon with a river flowing in the middle", 
    seller_id: 4, 
    category_id: 1,
    quantity: 99,
    price: 75.95
  ) 
  nature_13 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature13.jpg')
  nature13.photos.attach(io: nature_13, filename: 'nature13.jpg')

  street4 = Product.create!(
    name: "Tokyo",
    description: "Extraordinary bright colors of the nightlife in Tokyo", 
    seller_id: 4, 
    category_id: 2,
    quantity: 99,
    price: 29.95
  ) 
  street_4 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street4.jpg')
  street4.photos.attach(io: street_4, filename: 'street4.jpg')

  street5 = Product.create!(
    name: "Lunar New Year",
    description: "Chinese Lanterns that are lit up during the Mid Autumn Festival", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 9.95
  ) 
  street_5 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street5.jpg')
  street5.photos.attach(io: street_5, filename: 'street5.jpg')

  street7 = Product.create!(
    name: "Mid Autumn",
    description: "Chinese Lanterns that are lit up during the Mid Autumn Festival. Enjoy the beauty of an old town", 
    seller_id: 2, 
    category_id: 2,
    quantity: 99,
    price: 29.95
  ) 
  street_7 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street7.jpg')
  street7.photos.attach(io: street_7, filename: 'street7.jpg')

  street11 = Product.create!(
    name: "Colors",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell.", 
    seller_id: 3, 
    category_id: 2,
    quantity: 99,
    price: 132.95
  ) 
  street_11 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street11.jpg')
  street11.photos.attach(io: street_11, filename: 'street11.jpg')

  street9 = Product.create!(
    name: "Ferris Wheel",
    description: "A bright red and blue Ferris Wheel that will bring back fun memories of the carnival.", 
    seller_id: 2, 
    category_id: 2,
    quantity: 99,
    price: 81.95
  ) 
  street_9 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street9.jpg')
  street9.photos.attach(io: street_9, filename: 'street9.jpg')

  misq1 = Product.create!(
    name: "Pikachu",
    description: "a simple Pikachu posing with a hoodie", 
    seller_id: 4, 
    category_id: 6,
    quantity: 99,
    price: 25.95
  ) 
  misq_1 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/misq/misq1.jpg')
  misq1.photos.attach(io: misq_1, filename: 'misq1.jpg')


  ################## MORE PRODUCTS

  nature1 = Product.create!(
    name: "Colors",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 29.95
  ) 
  nature_1 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature1.jpg')
  nature1.photos.attach(io: nature_1, filename: 'nature1.jpg')

  nature10 = Product.create!(
    name: "Blue Bird",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 29.95
  ) 
  nature_10 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature10.jpg')
  nature10.photos.attach(io: nature_10, filename: 'nature10.jpg')

  nature14 = Product.create!(
    name: "Aurora Lights",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 51.95
  ) 
  nature_14 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature14.jpg')
  nature14.photos.attach(io: nature_14, filename: 'nature14.jpg')

  nature15 = Product.create!(
    name: "Daisy",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 29.95
  ) 
  nature_15 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature15.jpg')
  nature15.photos.attach(io: nature_15, filename: 'nature15.jpg')

  nature16 = Product.create!(
    name: "Bird's eye view",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 21.95
  ) 
  nature_16 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature16.jpg')
  nature16.photos.attach(io: nature_16, filename: 'nature16.jpg')

  nature17 = Product.create!(
    name: "Rocky Road",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 29.95
  ) 
  nature_17 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature17.jpg')
  nature17.photos.attach(io: nature_17, filename: 'nature17.jpg')

  nature18 = Product.create!(
    name: "Sunset",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 31.95
  ) 
  nature_18 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature18.jpg')
  nature18.photos.attach(io: nature_18, filename: 'nature18.jpg')


  nature19 = Product.create!(
    name: "The Grand Canyon",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 11.95
  ) 
  nature_19 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature19.jpg')
  nature19.photos.attach(io: nature_19, filename: 'nature19.jpg')

  nature20 = Product.create!(
    name: "The Grand Canyon",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 31.95
  ) 
  nature_20 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature20.jpg')
  nature20.photos.attach(io: nature_20, filename: 'nature20.jpg')
  
  nature21 = Product.create!(
    name: "The First Snow",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 22.95
  ) 
  nature_21 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature21.jpg')
  nature21.photos.attach(io: nature_21, filename: 'nature21.jpg')

  nature22 = Product.create!(
    name: "Burning Dandilion",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 31.95
  ) 
  nature_22 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature22.jpg')
  nature22.photos.attach(io: nature_22, filename: 'nature22.jpg')

  nature23 = Product.create!(
    name: "Creek",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 99.95
  ) 
  nature_23 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature23.jpg')
  nature23.photos.attach(io: nature_23, filename: 'nature23.jpg')

  nature24 = Product.create!(
    name: "On the Hunt",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 31.95
  ) 
  nature_24 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature24.jpg')
  nature24.photos.attach(io: nature_24, filename: 'nature24.jpg')

  nature25 = Product.create!(
    name: "Twin Peaks",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 19.95
  ) 
  nature_25 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature25.jpg')
  nature25.photos.attach(io: nature_25, filename: 'nature25.jpg')

  nature26 = Product.create!(
    name: "Blood Moon",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 99.95
  ) 
  nature_26 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature26.jpg')
  nature26.photos.attach(io: nature_26, filename: 'nature_26.jpg')

  nature27 = Product.create!(
    name: "Rock Village",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 10.95
  ) 
  nature_27 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature27.jpg')
  nature27.photos.attach(io: nature_27, filename: 'nature27.jpg')

  nature28 = Product.create!(
    name: "Winter Plateau",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 21.95
  ) 
  nature_28 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature28.jpg')
  nature28.photos.attach(io: nature_28, filename: 'nature28.jpg')

  nature29 = Product.create!(
    name: "The Rain Forest",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 1,
    quantity: 99,
    price: 55.95
  ) 
  nature_29 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature29.jpg')
  nature29.photos.attach(io: nature_29, filename: 'nature29.jpg')

  street3 = Product.create!(
    name: "The Walk",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 19.95
  ) 
  street_3 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street3.jpg')
  street3.photos.attach(io: street_3, filename: 'street3.jpg')

  street6 = Product.create!(
    name: "All of the Lights",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 39.95
  ) 
  street_6 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street6.jpg')
  street6.photos.attach(io: street_6, filename: 'street6.jpg')

  street8 = Product.create!(
    name: "The Spot",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 29.95
  ) 
  street_8 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street8.jpg')
  street8.photos.attach(io: street_8, filename: 'street8.jpg')

  street10 = Product.create!(
    name: "Kafe",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 69.95
  ) 
  street_10 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street10.jpg')
  street10.photos.attach(io: street_10, filename: 'street10.jpg')

  street12 = Product.create!(
    name: "Lanterns",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 39.95
  ) 
  street_12 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street12.jpg')
  street12.photos.attach(io: street_12, filename: 'street12.jpg')

  street13 = Product.create!(
    name: "City Lights",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 12.95
  ) 
  street_13 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street13.jpg')
  street13.photos.attach(io: street_13, filename: 'street13.jpg')

  street14 = Product.create!(
    name: "Brown City",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 28.95
  ) 
  street_14 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street14.jpg')
  street14.photos.attach(io: street_14, filename: 'street14.jpg')

  street15 = Product.create!(
    name: "Berlin",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 51.95
  ) 
  street_15 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street15.jpg')
  street15.photos.attach(io: street_15, filename: 'street15.jpg')

  street16 = Product.create!(
    name: "New York City",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 39.95
  ) 
  street_16 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street16.jpg')
  street16.photos.attach(io: street_16, filename: 'street16.jpg')

  street17 = Product.create!(
    name: "Eiffel Tower",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 99.95
  ) 
  street_17 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street17.jpg')
  street17.photos.attach(io: street_17, filename: 'street17.jpg')

  street18 = Product.create!(
    name: "Tokyo",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 39.95
  ) 
  street_18 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street18.jpg')
  street18.photos.attach(io: street_18, filename: 'street18.jpg')

  street19 = Product.create!(
    name: "Tokyo",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 22.95
  ) 
  street_19 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street19.jpg')
  street19.photos.attach(io: street_19, filename: 'street19.jpg')

  street20 = Product.create!(
    name: "New York City",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 39.95
  ) 
  street_20 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street20.jpg')
  street20.photos.attach(io: street_20, filename: 'street20.jpg')

  street21 = Product.create!(
    name: "Inception",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 81.95
  ) 
  street_21 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street21.jpg')
  street21.photos.attach(io: street_21, filename: 'street21.jpg')

  street22 = Product.create!(
    name: "The Light",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 52.95
  ) 
  street_22 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street22.jpg')
  street22.photos.attach(io: street_22, filename: 'street22.jpg')

  street23 = Product.create!(
    name: "Night Life",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 99.95
  ) 
  street_23 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street23.jpg')
  street23.photos.attach(io: street_23, filename: 'street23.jpg')

  street24 = Product.create!(
    name: "Night Crawler",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 52.95
  ) 
  street_24 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street24.jpg')
  street24.photos.attach(io: street_24, filename: 'street24.jpg')

  street25 = Product.create!(
    name: "Old Town",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 71.95
  ) 
  street_25 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street25.jpg')
  street25.photos.attach(io: street_25, filename: 'street25.jpg')

  street26 = Product.create!(
    name: "Night Life",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 39.95
  ) 
  street_26 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street26.jpg')
  street26.photos.attach(io: street_26, filename: 'street26.jpg')

  street27 = Product.create!(
    name: "View from Below",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 39.95
  ) 
  street_27 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street27.jpg')
  street27.photos.attach(io: street_27, filename: 'street27.jpg')

  street28 = Product.create!(
    name: "City Hall",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 39.95
  ) 
  street_28 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street28.jpg')
  street28.photos.attach(io: street_28, filename: 'street28.jpg')

  street29 = Product.create!(
    name: "Ferris Wheel",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 51.95
  ) 
  street_29 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street29.jpg')
  street29.photos.attach(io: street_29, filename: 'street29.jpg')

  street30 = Product.create!(
    name: "Australia",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 21.95
  ) 
  street_30 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street30.jpg')
  street30.photos.attach(io: street_30, filename: 'street30.jpg')

  street31 = Product.create!(
    name: "Risk it for the Bisquick",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 39.95
  ) 
  street_31 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street31.jpg')
  street31.photos.attach(io: street_31, filename: 'street31.jpg')

  street32 = Product.create!(
    name: "Old Town",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 1, 
    category_id: 2,
    quantity: 99,
    price: 39.95
  ) 
  street_32 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street32.jpg')
  street32.photos.attach(io: street_32, filename: 'street32.jpg')

  #### MODERN PRODUCTS

  modern1 = Product.create!(
    name: "Dragon",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 3,
    quantity: 99,
    price: 39.95
  ) 
  modern_1 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/modern/modern1.jpg')
  modern1.photos.attach(io: modern_1, filename: 'modern1.jpg')

  modern2 = Product.create!(
    name: "Tea Time",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 3,
    quantity: 99,
    price: 19.95
  ) 
  modern_2 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/modern/modern2.jpg')
  modern2.photos.attach(io: modern_2, filename: 'modern2.jpg')

  modern3 = Product.create!(
    name: "Love",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 3,
    quantity: 99,
    price: 99.95
  ) 
  modern_3 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/modern/modern3.jpg')
  modern3.photos.attach(io: modern_3, filename: 'modern3.jpg')

  modern4 = Product.create!(
    name: "The Bike",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 3,
    quantity: 99,
    price: 88.95
  ) 
  modern_4 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/modern/modern4.jpg')
  modern4.photos.attach(io: modern_4, filename: 'modern4.jpg')

  modern5 = Product.create!(
    name: "Abstract",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 3,
    quantity: 99,
    price: 39.95
  ) 
  modern_5 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/modern/modern5.jpg')
  modern5.photos.attach(io: modern_5, filename: 'modern5.jpg')

  modern6 = Product.create!(
    name: "Tall Buildings",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 3,
    quantity: 99,
    price: 39.95
  ) 
  modern_6 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/modern/modern6.jpg')
  modern6.photos.attach(io: modern_6, filename: 'modern6.jpg')

  modern7 = Product.create!(
    name: "Empty Bench",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 3,
    quantity: 99,
    price: 10.95
  ) 
  modern_7 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/modern/modern7.jpg')
  modern7.photos.attach(io: modern_7, filename: 'modern7.jpg')

  modern8 = Product.create!(
    name: "Abstract Sky",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 3,
    quantity: 99,
    price: 22.95
  ) 
  modern_8 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/modern/modern8.jpg')
  modern8.photos.attach(io: modern_8, filename: 'modern8.jpg')

  modern9 = Product.create!(
    name: "Black Sky",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 3,
    quantity: 99,
    price: 39.95
  ) 
  modern_9 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/modern/modern9.jpg')
  modern9.photos.attach(io: modern_9, filename: 'modern9.jpg')

  modern10 = Product.create!(
    name: "Abstract White",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 3,
    quantity: 99,
    price: 39.95
  ) 
  modern_10 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/modern/modern10.jpg')
  modern10.photos.attach(io: modern_10, filename: 'modern10.jpg')

  modern11 = Product.create!(
    name: "Abstract White",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 3,
    quantity: 99,
    price: 41.95
  ) 
  modern_11 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/modern/modern11.jpg')
  modern11.photos.attach(io: modern_11, filename: 'modern11.jpg')

  modern12 = Product.create!(
    name: "Abstract Colors",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 3,
    quantity: 99,
    price: 55.95
  ) 
  modern_12 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/modern/modern12.jpg')
  modern12.photos.attach(io: modern_12, filename: 'modern12.jpg')

  modern13 = Product.create!(
    name: "Abstract Colors",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 3,
    quantity: 99,
    price: 39.95
  ) 
  modern_13 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/modern/modern13.jpg')
  modern13.photos.attach(io: modern_13, filename: 'modern13.jpg')

  modern14 = Product.create!(
    name: "Abstract Black and White",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 3,
    quantity: 99,
    price: 500.95
  ) 
  modern_14 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/modern/modern14.jpg')
  modern14.photos.attach(io: modern_14, filename: 'modern14.jpg')

  modern15 = Product.create!(
    name: "Abstract Paint",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 3,
    quantity: 99,
    price: 999.95
  ) 
  modern_15 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/modern/modern15.jpg')
  modern15.photos.attach(io: modern_15, filename: 'modern15.jpg')

  modern16 = Product.create!(
    name: "Inception",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 4, 
    category_id: 3,
    quantity: 99,
    price: 399.95
  ) 
  modern_16 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/modern/modern16.jpg')
  modern16.photos.attach(io: modern_16, filename: 'modern16.jpg')

  paint2 = Product.create!(
    name: "The Forest",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 99,
    price: 39.95
  ) 
  paint_2 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint2.jpg')
  paint2.photos.attach(io: paint_2, filename: 'paint2.jpg')

  paint3 = Product.create!(
    name: "The Story",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 99,
    price: 10.95
  ) 
  paint_3 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint3.jpg')
  paint3.photos.attach(io: paint_3, filename: 'paint3.jpg')

  paint4 = Product.create!(
    name: "The Woodpecker",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 99,
    price: 21.95
  ) 
  paint_4 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint4.jpg')
  paint4.photos.attach(io: paint_4, filename: 'paint4.jpg')

  paint5 = Product.create!(
    name: "Two Lovers",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 99,
    price: 99.95
  ) 
  paint_5 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint5.jpg')
  paint5.photos.attach(io: paint_5, filename: 'paint5.jpg')

  paint6 = Product.create!(
    name: "Rolling Loud",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 99,
    price: 39.95
  ) 
  paint_6 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint6.jpg')
  paint6.photos.attach(io: paint_6, filename: 'paint6.jpg')

  paint7 = Product.create!(
    name: "Pirates",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 99,
    price: 39.95
  ) 
  paint_7 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint7.jpg')
  paint7.photos.attach(io: paint_7, filename: 'paint7.jpg')

  paint8 = Product.create!(
    name: "Pirates",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 99,
    price: 99.95
  ) 
  paint_8 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint8.jpg')
  paint8.photos.attach(io: paint_8, filename: 'paint8.jpg')

  paint9 = Product.create!(
    name: "The Fox",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 99,
    price: 39.95
  ) 
  paint_9 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint9.jpg')
  paint9.photos.attach(io: paint_9, filename: 'paint9.jpg')

  paint10 = Product.create!(
    name: "Abstract Flowers",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 99,
    price: 39.95
  ) 
  paint_10 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint10.jpg')
  paint10.photos.attach(io: paint_10, filename: 'paint10.jpg')

  paint11 = Product.create!(
    name: "Whale Canvas",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 99,
    price: 35.95
  ) 
  paint_11 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint11.jpg')
  paint11.photos.attach(io: paint_11, filename: 'paint11.jpg')

  paint12 = Product.create!(
    name: "Flowers",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 99,
    price: 71.95
  ) 
  paint_12 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint12.jpg')
  paint12.photos.attach(io: paint_12, filename: 'paint12.jpg')

  paint13 = Product.create!(
    name: "Sheeps in the Forest",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 99,
    price: 39.95
  ) 
  paint_13 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint13.jpg')
  paint13.photos.attach(io: paint_13, filename: 'paint13.jpg')

  paint14 = Product.create!(
    name: "The Indians",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 99,
    price: 66.95
  ) 
  paint_14 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint14.jpg')
  paint14.photos.attach(io: paint_14, filename: 'paint14.jpg')

  paint15 = Product.create!(
    name: "Pirates",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 99,
    price: 39.95
  ) 
  paint_15 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint15.jpg')
  paint15.photos.attach(io: paint_15, filename: 'paint15.jpg')

  paint16 = Product.create!(
    name: "The Path of Exile",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 99,
    price: 39.95
  ) 
  paint_16 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint16.jpg')
  paint16.photos.attach(io: paint_16, filename: 'paint16.jpg')

  paint16 = Product.create!(
    name: "Peaceful Farm Life",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 4,
    quantity: 99,
    price: 39.95
  ) 
  paint_16 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/paint/paint16.jpg')
  paint16.photos.attach(io: paint_16, filename: 'paint16.jpg')

  blackwhite3 = Product.create!(
    name: "Sail",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 5,
    quantity: 99,
    price: 39.95
  ) 
  blackwhite_3 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/blackwhite/blackwhite3.jpg')
  blackwhite3.photos.attach(io: blackwhite_3, filename: 'blackwhite3.jpg')

  blackwhite4 = Product.create!(
    name: "The City",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 5,
    quantity: 99,
    price: 45.95
  ) 
  blackwhite_4 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/blackwhite/blackwhite4.jpg')
  blackwhite4.photos.attach(io: blackwhite_4, filename: 'blackwhite4.jpg')

  blackwhite5 = Product.create!(
    name: "SmarTone Shop",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 5,
    quantity: 99,
    price: 39.95
  ) 
  blackwhite_5 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/blackwhite/blackwhite5.jpg')
  blackwhite5.photos.attach(io: blackwhite_5, filename: 'blackwhite5.jpg')

  blackwhite6 = Product.create!(
    name: "What's Outside?",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 5,
    quantity: 99,
    price: 99.95
  ) 
  blackwhite_6 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/blackwhite/blackwhite6.jpg')
  blackwhite6.photos.attach(io: blackwhite_6, filename: 'blackwhite6.jpg')

  blackwhite7 = Product.create!(
    name: "The Perfect Shadow",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 5,
    quantity: 99,
    price: 300.95
  ) 
  blackwhite_7 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/blackwhite/blackwhite7.jpg')
  blackwhite7.photos.attach(io: blackwhite_7, filename: 'blackwhite7.jpg')

  blackwhite8 = Product.create!(
    name: "Light",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 5,
    quantity: 99,
    price: 39.95
  ) 
  blackwhite_8 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/blackwhite/blackwhite8.jpg')
  blackwhite8.photos.attach(io: blackwhite_8, filename: 'blackwhite8.jpg')

  blackwhite9 = Product.create!(
    name: "Bikers",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 5,
    quantity: 99,
    price: 39.95
  ) 
  blackwhite_9 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/blackwhite/blackwhite9.jpg')
  blackwhite9.photos.attach(io: blackwhite_9, filename: 'blackwhite9.jpg')

  blackwhite10 = Product.create!(
    name: "Old Fashion",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 5,
    quantity: 99,
    price: 55.95
  ) 
  blackwhite_10 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/blackwhite/blackwhite10.jpg')
  blackwhite10.photos.attach(io: blackwhite_10, filename: 'blackwhite10.jpg')

  blackwhite11 = Product.create!(
    name: "Rose",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 5,
    quantity: 99,
    price: 522.95
  ) 
  blackwhite_11 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/blackwhite/blackwhite11.jpg')
  blackwhite11.photos.attach(io: blackwhite_11, filename: 'blackwhite11.jpg')

  misq3 = Product.create!(
    name: "Jolteon",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 6,
    quantity: 99,
    price: 99.95
  ) 
  misq_3 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/misq/misq3.jpg')
  misq3.photos.attach(io: misq_3, filename: 'misq3.jpg')

  misq4 = Product.create!(
    name: "Pikachu and Squirtle",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 6,
    quantity: 99,
    price: 299.95
  ) 
  misq_4 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/misq/misq4.jpg')
  misq4.photos.attach(io: misq_4, filename: 'misq4.jpg')

  misq5 = Product.create!(
    name: "Totodile",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 6,
    quantity: 99,
    price: 68.95
  ) 
  misq_5 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/misq/misq5.jpg')
  misq5.photos.attach(io: misq_5, filename: 'misq5.jpg')

  misq6 = Product.create!(
    name: "The Sign",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 6,
    quantity: 99,
    price: 33.95
  ) 
  misq_6 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/misq/misq6.jpg')
  misq6.photos.attach(io: misq_6, filename: 'misq6.jpg')

  narutoo = Product.create!(
    name: "Kyubii Naruto",
    description: "Simplicity at it's finest, vibrant colors with a story only you can tell. Like the say, a picture of worth a thousand words.", 
    seller_id: 3, 
    category_id: 6,
    quantity: 99,
    price: 52.95
  )
  narutoo_1 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/profile_pictures/naruto.jpg') 
  narutoo.photos.attach(io: narutoo_1, filename: 'naruto.jpg')

  ###### MISQ PRODUCTS


#PRODUCTS
  # dog_product_1 = Product.create!(
  #   name: 'Big Bone',
  #   description: "Do you feel like you need a fancy touch in your living room? With this awesome Aristocrat Doge poster, you’ll have all the luxury you need. The doge meme is a trend that has branched out into many offshoots and styles, so why not hang a depiction that is dignified and adorable on your wall? The colors are highly saturated into a matte, acid-free paper in multiple sizes, ready to be prepared for your office or living room. The print is easily delivered right to you, with multiple dimension choices available for you right away, so it will always be able to fit on your wall. Whether you are a fan of dogs or a fan of jokes on the internet, this translation of meme into art is now available and an easy purchase for a little extra color in your life, or for a friend that enjoys art for themselves. Let your love of fun and art collide with a purchase of this print!", 
  #   seller_id: 1, 
  #   category_id: 1,
  #   quantity: 5,
  #   price: 21.95
  # ) 
  # naruto = open('https://petsy-dev.s3.us-west-1.amazonaws.com/profile_pictures/naruto.jpg')
  # dog_product_1.photos.attach(io: naruto, filename: 'naruto.jpg')




 

 ### REVIEWS 
  review_1 = Review.create!(
    user_id: 1,
    product_id: 1,
    rating: 5,
    body: 'This is a really great quality item! So far my puppy Francis really enjoys it it has to be his favorite toy so far!',
  )

  review_2 = Review.create!(
    user_id: 2,
    product_id: 1,
    rating: 5,
    body: 'This treat is perfect for my 5 month old golden retriever! She doesnt seem to get tired of the treat at all unlike other treats she has had',
  )

  review_3 = Review.create!(
    user_id: 3,
    product_id: 1,
    rating: 3,
    body: 'Gohan would approve better than senzu beans'
  )

  review_4 = Review.create!(
    user_id: 2,
    product_id: 2,
    rating: 5,
    body: 'body 4 of review'
  )

  review_5 = Review.create!(
    user_id: 2,
    product_id: 2,
    rating: 5,
    body: 'body 5 of review'
  )

  review_6 = Review.create!(
    user_id: 5,
    product_id: 1,
    rating: 5,
    body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
  )
  
end