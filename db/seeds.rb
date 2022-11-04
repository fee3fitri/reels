# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'

puts "Destroying tables..."
# Unnecessary if using `rails db:seed:replant`
Product.destroy_all
User.destroy_all

puts "Resetting primary keys..."
# For easy testing, so that after seeding, the first `User` has `id` of 1
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('products')


puts "Creating users and products..."
# Create one user with an easy to remember name, email, and password:
demo_user = User.create!(
  email: 'demo@user.com', 
  name: 'Demo', 
  password: 'password'
)

# Crate all products
weekender_candy = Product.create!(
  name: "Weekender Candy ", 
  product_preview: "Experience the new wave of Australian sneaker design and world-class innovation. Get insanely comfortable with NitroBounce™ micro air bubble midsoles. Enjoy good weekend vibes, any day of the week.", 
  description: "Nitrobounce™ soles Get uplifted floating above thousands of micro air bubbles. Extra padding across the tongue and back collar for feel-good wears. Orthotic-friendly removable footbed Swap in your own insoles for that perfect fit. 3M Reflective Strip Jump on your bike and be seen after dark. Australian designed using cutting-edge innovation, originality and extreme attention to detail", 
  category: "Women", 
  color: "Cobalt Candy Gold White", 
  size: "5 6 7 8 9 10", 
  price: 159.95,
)

weekender_candy.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/candy/weekender_candy_1.webp"), filename: "weekender_candy_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/candy/weekender_candy_2.webp"), filename: "weekender_candy_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/candy/weekender_candy_3.webp"), filename: "weekender_candy_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/candy/weekender_candy_4.webp"), filename: "weekender_candy_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/candy/weekender_candy_5.webp"), filename: "weekender_candy_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/candy/weekender_candy_6.webp"), filename: "weekender_candy_4.webp"}
])

weekender_cobalt = Product.create!(
  name: "Weekender Cobalt", 
  product_preview: "Experience the new wave of Australian sneaker design and world-class innovation. Get insanely comfortable with NitroBounce™ micro air bubble midsoles. Enjoy good weekend vibes, any day of the week.", 
  description: "Nitrobounce™ soles Get uplifted floating above thousands of micro air bubbles. Extra padding across the tongue and back collar for feel-good wears. Orthotic-friendly removable footbed Swap in your own insoles for that perfect fit. 3M Reflective Strip Jump on your bike and be seen after dark. Australian designed using cutting-edge innovation, originality and extreme attention to detail", 
  category: "Women", 
  color: "Cobalt Candy Gold White", 
  size: "5 6 7 8 9 10", 
  price: 159.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
)

weekender_gold = Product.create!(
  name: "Weekender Gold", 
  product_preview: "Experience the new wave of Australian sneaker design and world-class innovation. Get insanely comfortable with NitroBounce™ micro air bubble midsoles. Enjoy good weekend vibes, any day of the week.", 
  description: "Nitrobounce™ soles Get uplifted floating above thousands of micro air bubbles. Extra padding across the tongue and back collar for feel-good wears. Orthotic-friendly removable footbed Swap in your own insoles for that perfect fit. 3M Reflective Strip Jump on your bike and be seen after dark. Australian designed using cutting-edge innovation, originality and extreme attention to detail", 
  category: "Women", 
  color: "Cobalt Candy Gold White", 
  size: "5 6 7 8 9 10", 
  price: 159.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
)

weekender_white = Product.create!(
  name: "Weekender White", 
  product_preview: "Experience the new wave of Australian sneaker design and world-class innovation. Get insanely comfortable with NitroBounce™ micro air bubble midsoles. Enjoy good weekend vibes, any day of the week.", 
  description: "Nitrobounce™ soles Get uplifted floating above thousands of micro air bubbles. Extra padding across the tongue and back collar for feel-good wears. Orthotic-friendly removable footbed Swap in your own insoles for that perfect fit. 3M Reflective Strip Jump on your bike and be seen after dark. Australian designed using cutting-edge innovation, originality and extreme attention to detail", 
  category: "Women", 
  color: "Cobalt Candy Gold White", 
  size: "5 6 7 8 9 10", price: 159.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

chelsea_black = Product.create!(
  name: "Chelsea Black", 
  product_preview: "The lug boot reimagined with signature Rollie lightness, of course. Our new Rubberised Chelsea is weather-resistant & built to go the distance. You won’t need to lug this guy around.", 
  description: "Durable rubber tread outsole extra grippy for those wet days. Water-resistant rubberised leather upper. Stay dry - rain drops will slide right off. Elasticised gusset slip on & go out. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Australian-designed using cutting-edge innovation, originality, and extreme attention to detail.", 
  category: "Women", 
  color: "Ochre Leopard Bone Black", 
  size: "5 6 7 8 9 10", 
  price: 179.95, 
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

chelsea_ochre = Product.create!(
  name: "Chelsea Ochre", 
  product_preview: "The lug boot reimagined with signature Rollie lightness, of course. Our new Rubberised Chelsea is weather-resistant & built to go the distance. You won’t need to lug this guy around.", 
  description: "Durable rubber tread outsole extra grippy for those wet days. Water-resistant rubberised leather upper. Stay dry - rain drops will slide right off. Elasticised gusset slip on & go out. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Australian-designed using cutting-edge innovation, originality, and extreme attention to detail.", 
  category: "Women", 
  color: "Ochre Leopard Bone Black", 
  size: "5 6 7 8 9 10", 
  price: 179.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

chelsea_leopard = Product.create!(
  name: "Chelsea Leopard", 
  product_preview: "The lug boot reimagined with signature Rollie lightness, of course. Our new Rubberised Chelsea is weather-resistant & built to go the distance. You won’t need to lug this guy around.", 
  description: "Durable rubber tread outsole extra grippy for those wet days. Water-resistant rubberised leather upper. Stay dry - rain drops will slide right off. Elasticised gusset slip on & go out. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Australian-designed using cutting-edge innovation, originality, and extreme attention to detail.", 
  category: "Women", 
  color: "Ochre Leopard Bone Black", 
  size: "5 6 7 8 9 10", 
  price: 179.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

chelsea_bone = Product.create!(
  name: "Chelsea Bone", 
  product_preview: "The lug boot reimagined with signature Rollie lightness, of course. Our new Rubberised Chelsea is weather-resistant & built to go the distance. You won’t need to lug this guy around.", 
  description: "Durable rubber tread outsole extra grippy for those wet days. Water-resistant rubberised leather upper. Stay dry - rain drops will slide right off. Elasticised gusset slip on & go out. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Australian-designed using cutting-edge innovation, originality, and extreme attention to detail.", 
  category: "Women", 
  color: "Ochre Leopard Bone Black", 
  size: "5 6 7 8 9 10", 
  price: 179.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

derby_chrome = Product.create!(
  name: "Derby Chrome", 
  product_preview: "Your ultimate wardrobe MVP. Our innovative hall of fame Derby combines sneaker-like comfort and dress shoe smarts. Dress up or down for 365 day styling from street to studio.Your ultimate wardrobe MVP. Our innovative hall of fame Derby combines sneaker-like comfort and dress shoe smarts. Dress up or down for 365 day styling from street to studio.", 
  description: "Cushy EVA midsoles Incredibly light and flexible to move all day (and night). Canvas and leather linings keep your feet cool and dry, you can ditch the socks. Foot hugging internal elastic Snug perfect fit, no tight laces. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Padded back collars No break-in time or ankle rubs for instant happy wears. Anti-slip rubber outsole Avoid slippery moments in our trade mark Rollie tread. Australian designed using cutting-edge innovation, originality, and extreme attention to detail", 
  category: "Women", 
  color: "Chrome Cognac Black", 
  size: "5 6 7 8 9 10", 
  price: 109.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

derby_cognac = Product.create!(
  name: "Derby Cognac", 
  product_preview: "Your ultimate wardrobe MVP. Our innovative hall of fame Derby combines sneaker-like comfort and dress shoe smarts. Dress up or down for 365 day styling from street to studio.Your ultimate wardrobe MVP. Our innovative hall of fame Derby combines sneaker-like comfort and dress shoe smarts. Dress up or down for 365 day styling from street to studio.", 
  description: "Cushy EVA midsoles Incredibly light and flexible to move all day (and night). Canvas and leather linings keep your feet cool and dry, you can ditch the socks. Foot hugging internal elastic Snug perfect fit, no tight laces. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Padded back collars No break-in time or ankle rubs for instant happy wears. Anti-slip rubber outsole Avoid slippery moments in our trade mark Rollie tread. Australian designed using cutting-edge innovation, originality, and extreme attention to detail", 
  category: "Women", 
  color: "Chrome Cognac Black", 
  size: "5 6 7 8 9 10", 
  price: 109.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

derby_black = Product.create!(
  name: "Derby Black", 
  product_preview: "Your ultimate wardrobe MVP. Our innovative hall of fame Derby combines sneaker-like comfort and dress shoe smarts. Dress up or down for 365 day styling from street to studio.Your ultimate wardrobe MVP. Our innovative hall of fame Derby combines sneaker-like comfort and dress shoe smarts. Dress up or down for 365 day styling from street to studio.", 
  description: "Cushy EVA midsoles Incredibly light and flexible to move all day (and night). Canvas and leather linings keep your feet cool and dry, you can ditch the socks. Foot hugging internal elastic Snug perfect fit, no tight laces. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Padded back collars No break-in time or ankle rubs for instant happy wears. Anti-slip rubber outsole Avoid slippery moments in our trade mark Rollie tread. Australian designed using cutting-edge innovation, originality, and extreme attention to detail", 
  category: "Women", 
  color: "Chrome Cognac Black", 
  size: "5 6 7 8 9 10", 
  price: 109.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

penny_black = Product.create!(
  name: "Penny Loafer Black",
  product_preview:
    "Go places comfortably in these classic style slips-ons with super light soles that go with everything. From high summer to cool winters and mild days in between, this shoe is built for year round wear.",
  description:
    "Cushy EVA midsoles Incredibly light and flexible to move all day (and night). Soft breathable linings keep your feet cool and dry, you can ditch the socks. Anti-slip rubber outsole Avoid slippery moments in our Trade Mark Rollie tread. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Australian designed using cutting-edge innovation, originality, and extreme attention to detail.",
  category: "Women",
  color: "Black Leopard Tan",
  size: "5 6 7 8 9 10",
  price: 109.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

penny_leopard = Product.create!(
  name: "Penny Loafer Leopard",
  product_preview:
    "Go places comfortably in these classic style slips-ons with super light soles that go with everything. From high summer to cool winters and mild days in between, this shoe is built for year round wear.",
  description:
    "Cushy EVA midsoles Incredibly light and flexible to move all day (and night). Soft breathable linings keep your feet cool and dry, you can ditch the socks. Anti-slip rubber outsole Avoid slippery moments in our Trade Mark Rollie tread. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Australian designed using cutting-edge innovation, originality, and extreme attention to detail.",
  category: "Women",
  color: "Black Leopard Tan",
  size: "5 6 7 8 9 10",
  price: 109.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )
  
penny_tan = Product.create!(
  name: "Penny Loafer Tan",
  product_preview:
    "Go places comfortably in these classic style slips-ons with super light soles that go with everything. From high summer to cool winters and mild days in between, this shoe is built for year round wear.",
  description:
    "Cushy EVA midsoles Incredibly light and flexible to move all day (and night). Soft breathable linings keep your feet cool and dry, you can ditch the socks. Anti-slip rubber outsole Avoid slippery moments in our Trade Mark Rollie tread. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Australian designed using cutting-edge innovation, originality, and extreme attention to detail.",
  category: "Women",
  color: "Black Leopard Tan",
  size: "5 6 7 8 9 10",
  price: 109.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

derby_m_black = Product.create!(
  name: "Derby Classic Black", 
  product_preview: "Your new wardrobe MVP. Dress your derbies up or down for whatever’s on the agenda: morning commute to a night at the footy.", 
  description: "All New Stack Sole An added layer of cushioning EVA foam in the midsole for elevated style and comfort. Canvas and leather linings Keep your feet cool and dry, you can ditch the socks. Foot hugging internal elastic Snug perfect fit, no tight laces. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Padded back collars No break-in time or ankle rubs for instant happy wears. Anti-slip rubber outsole Avoid slippery moments in our trade mark Rollie tread. Australian designed using cutting-edge innovation, originality, and extreme attention to detail.", 
  category: "Men", 
  color: "Black Caramel Moss", 
  size: "8 9 10 11 12 13", 
  price: 109.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

derby_m_caramel = Product.create!(
  name: "Derby Caramel", 
  product_preview: "Your new wardrobe MVP. Dress your derbies up or down for whatever’s on the agenda: morning commute to a night at the footy.", 
  description: "All New Stack Sole An added layer of cushioning EVA foam in the midsole for elevated style and comfort. Canvas and leather linings Keep your feet cool and dry, you can ditch the socks. Foot hugging internal elastic Snug perfect fit, no tight laces. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Padded back collars No break-in time or ankle rubs for instant happy wears. Anti-slip rubber outsole Avoid slippery moments in our trade mark Rollie tread. Australian designed using cutting-edge innovation, originality, and extreme attention to detail.", 
  category: "Men", 
  color: "Black Caramel Moss", 
  size: "8 9 10 11 12 13", 
  price: 109.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

derby_m_moss = Product.create!(
  name: "Derby Moss", 
  product_preview: "Your new wardrobe MVP. Dress your derbies up or down for whatever’s on the agenda: morning commute to a night at the footy.", 
  description: "All New Stack Sole An added layer of cushioning EVA foam in the midsole for elevated style and comfort. Canvas and leather linings Keep your feet cool and dry, you can ditch the socks. Foot hugging internal elastic Snug perfect fit, no tight laces. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Padded back collars No break-in time or ankle rubs for instant happy wears. Anti-slip rubber outsole Avoid slippery moments in our trade mark Rollie tread. Australian designed using cutting-edge innovation, originality, and extreme attention to detail.", 
  category: "Men", 
  color: "Black Caramel Moss", 
  size: "8 9 10 11 12 13", 
  price: 109.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

weekender_m_amber = Product.create!(
  name: "Weekender Amber",
  product_preview: "Experience the new wave of Australian sneaker design and world-class innovation. Get insanely comfortable with NitroBounce™ micro air bubble midsoles. Enjoy good weekend vibes, any day of the week.",
  description:"Nitrobounce™ soles Get uplifted floating above thousands of micro air bubbles. Extra padding across the tongue and back collar for feel-good wears. Orthotic-friendly removable footbed Swap in your own insoles for that perfect fit. 3M Reflective Strip Jump on your bike and be seen after dark. Australian designed using cutting-edge innovation, originality and extreme attention to detail.",
  category: "Men",
  color: "Amber Black Cobalt Mint",
  size: "8 9 10 11 12 13",
  price: 159.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

weekender_m_black = Product.create!(
  name: "Weekender Black",
  product_preview: "Experience the new wave of Australian sneaker design and world-class innovation. Get insanely comfortable with NitroBounce™ micro air bubble midsoles. Enjoy good weekend vibes, any day of the week.",
  description:"Nitrobounce™ soles Get uplifted floating above thousands of micro air bubbles. Extra padding across the tongue and back collar for feel-good wears. Orthotic-friendly removable footbed Swap in your own insoles for that perfect fit. 3M Reflective Strip Jump on your bike and be seen after dark. Australian designed using cutting-edge innovation, originality and extreme attention to detail.",
  category: "Men",
  color: "Amber Black Cobalt Mint",
  size: "8 9 10 11 12 13",
  price: 159.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

weekender_m_cobalt = Product.create!(
  name: "Weekender Cobalt Clash",
  product_preview: "Experience the new wave of Australian sneaker design and world-class innovation. Get insanely comfortable with NitroBounce™ micro air bubble midsoles. Enjoy good weekend vibes, any day of the week.",
  description:"Nitrobounce™ soles Get uplifted floating above thousands of micro air bubbles. Extra padding across the tongue and back collar for feel-good wears. Orthotic-friendly removable footbed Swap in your own insoles for that perfect fit. 3M Reflective Strip Jump on your bike and be seen after dark. Australian designed using cutting-edge innovation, originality and extreme attention to detail.",
  category: "Men",
  color: "Amber Black Cobalt Mint",
  size: "8 9 10 11 12 13",
  price: 159.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

weekender_m_mint = Product.create!(
  name: "Weekender Mint",
  product_preview: "Experience the new wave of Australian sneaker design and world-class innovation. Get insanely comfortable with NitroBounce™ micro air bubble midsoles. Enjoy good weekend vibes, any day of the week.",
  description:"Nitrobounce™ soles Get uplifted floating above thousands of micro air bubbles. Extra padding across the tongue and back collar for feel-good wears. Orthotic-friendly removable footbed Swap in your own insoles for that perfect fit. 3M Reflective Strip Jump on your bike and be seen after dark. Australian designed using cutting-edge innovation, originality and extreme attention to detail.",
  category: "Men",
  color: "Amber Black Cobalt Mint",
  size: "8 9 10 11 12 13",
  price: 159.95,
  image_url: "https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_1.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_2.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_3.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_4.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_5.webp https://reels-dev.s3.us-west-1.amazonaws.com/gold/weekender_gold_6.webp"
  )

puts "Done!"
