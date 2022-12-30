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
  # SPLASH PRODUCTS
    nature11 = Product.create!(
    name: 'River flows through Switzerland',
    description: "Picture taken by Clifford of the beautiful mountains in Switzerland during the summer time", 
    seller_id: 1, 
    category_id: 1,
    quantity: 5,
    price: 21.95
  ) 
  nature_11 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature1.jpg')
  nature11.photos.attach(io: nature_11, filename: 'nature11.jpg')

    blackwhite1 = Product.create!(
    name: 'The Walk',
    description: "a man walking into a modern museum", 
    seller_id: 1, 
    category_id: 5,
    quantity: 8,
    price: 25.95
  ) 
  blackwhite_1 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/blackwhite/blackwhite1.jpg')
  blackwhite1.photos.attach(io: blackwhite_1, filename: 'blackwhite1.jpg')

  street1 = Product.create!(
    name: 'Lunar New Year',
    description: "Picture taken by Clifford of a night in New York City's China Town", 
    seller_id: 2, 
    category_id: 2,
    quantity: 3,
    price: 15.95
  ) 
  street_1 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/landscape/street1.jpg')
  street1.photos.attach(io: street_1, filename: 'street1.jpg')

  nature9 = Product.create!(
    name: 'Winter is coming',
    description: "Majestic mountains of Tibet", 
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
    description: "Tavan Bogd the mountains Mongolia, displaying the quiet nature of it's land", 
    seller_id: 4, 
    category_id: 1,
    quantity: 25,
    price: 60.95
  ) 
  nature12 = open('https://petsy-dev.s3.us-west-1.amazonaws.com/nature/nature12.jpg')
  nature12.photos.attach(io: nature12, filename: 'nature12.jpg')
  
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