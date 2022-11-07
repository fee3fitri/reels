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
  name: "Weekender Candy", 
  product_preview: "Experience the new wave of Australian sneaker design and world-class innovation. Get insanely comfortable with NitroBounce™ micro air bubble midsoles. Enjoy good weekend vibes, any day of the week.", 
  description: "Nitrobounce™ soles Get uplifted floating above thousands of micro air bubbles. Extra padding across the tongue and back collar for feel-good wears. Orthotic-friendly removable footbed Swap in your own insoles for that perfect fit. 3M Reflective Strip Jump on your bike and be seen after dark. Australian designed using cutting-edge innovation, originality and extreme attention to detail", 
  category: "Women", 
  color: "Cobalt Candy Gold White", 
  size: "5 6 7 8 9 10", 
  price: 159.95,
)

weekender_candy.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/candy/weekender_candy_1.webp"), filename: "weekender_candy_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/candy/weekender_candy_2.webp"), filename: "weekender_candy_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/candy/weekender_candy_3.webp"), filename: "weekender_candy_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/candy/weekender_candy_4.webp"), filename: "weekender_candy_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/candy/weekender_candy_5.webp"), filename: "weekender_candy_5.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/candy/weekender_candy_6.webp"), filename: "weekender_candy_6.webp"},
])

weekender_cobalt = Product.create!(
  name: "Weekender Cobalt", 
  product_preview: "Experience the new wave of Australian sneaker design and world-class innovation. Get insanely comfortable with NitroBounce™ micro air bubble midsoles. Enjoy good weekend vibes, any day of the week.", 
  description: "Nitrobounce™ soles Get uplifted floating above thousands of micro air bubbles. Extra padding across the tongue and back collar for feel-good wears. Orthotic-friendly removable footbed Swap in your own insoles for that perfect fit. 3M Reflective Strip Jump on your bike and be seen after dark. Australian designed using cutting-edge innovation, originality and extreme attention to detail", 
  category: "Women", 
  color: "Cobalt Candy Gold White", 
  size: "5 6 7 8 9 10", 
  price: 159.95,
)

weekender_cobalt.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/cobalt/weekender_cobalt_1.webp"), filename: "weekender_cobalt_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/cobalt/weekender_cobalt_2.webp"), filename: "weekender_cobalt_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/cobalt/weekender_cobalt_3.webp"), filename: "weekender_cobalt_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/cobalt/weekender_cobalt_4.webp"), filename: "weekender_cobalt_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/cobalt/weekender_cobalt_5.webp"), filename: "weekender_cobalt_5.webp"},
])

weekender_gold = Product.create!(
  name: "Weekender Gold", 
  product_preview: "Experience the new wave of Australian sneaker design and world-class innovation. Get insanely comfortable with NitroBounce™ micro air bubble midsoles. Enjoy good weekend vibes, any day of the week.", 
  description: "Nitrobounce™ soles Get uplifted floating above thousands of micro air bubbles. Extra padding across the tongue and back collar for feel-good wears. Orthotic-friendly removable footbed Swap in your own insoles for that perfect fit. 3M Reflective Strip Jump on your bike and be seen after dark. Australian designed using cutting-edge innovation, originality and extreme attention to detail", 
  category: "Women", 
  color: "Cobalt Candy Gold White", 
  size: "5 6 7 8 9 10", 
  price: 159.95,
)

weekender_gold.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/gold/weekender_gold_1.webp"), filename: "weekender_gold_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/gold/weekender_gold_2.webp"), filename: "weekender_gold_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/gold/weekender_gold_3.webp"), filename: "weekender_gold_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/gold/weekender_gold_4.webp"), filename: "weekender_gold_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/gold/weekender_gold_5.webp"), filename: "weekender_gold_5.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/gold/weekender_gold_6.webp"), filename: "weekender_gold_6.webp"},
])

weekender_white = Product.create!(
  name: "Weekender White", 
  product_preview: "Experience the new wave of Australian sneaker design and world-class innovation. Get insanely comfortable with NitroBounce™ micro air bubble midsoles. Enjoy good weekend vibes, any day of the week.", 
  description: "Nitrobounce™ soles Get uplifted floating above thousands of micro air bubbles. Extra padding across the tongue and back collar for feel-good wears. Orthotic-friendly removable footbed Swap in your own insoles for that perfect fit. 3M Reflective Strip Jump on your bike and be seen after dark. Australian designed using cutting-edge innovation, originality and extreme attention to detail", 
  category: "Women", 
  color: "Cobalt Candy Gold White", 
  size: "5 6 7 8 9 10", price: 159.95,
  )
  
  weekender_white.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/white/weekender_white_1.webp"), filename: "weekender_white_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/white/weekender_white_2.webp"), filename: "weekender_white_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/white/weekender_white_3.webp"), filename: "weekender_white_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/white/weekender_white_4.webp"), filename: "weekender_white_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/white/weekender_white_5.webp"), filename: "weekender_white_5.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/white/weekender_white_6.webp"), filename: "weekender_white_6.webp"},
])


chelsea_black = Product.create!(
  name: "Chelsea Black", 
  product_preview: "The lug boot reimagined with signature Rollie lightness, of course. Our new Rubberised Chelsea is weather-resistant & built to go the distance. You won’t need to lug this guy around.", 
  description: "Durable rubber tread outsole extra grippy for those wet days. Water-resistant rubberised leather upper. Stay dry - rain drops will slide right off. Elasticised gusset slip on & go out. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Australian-designed using cutting-edge innovation, originality, and extreme attention to detail.", 
  category: "Women", 
  color: "Ochre Leopard Bone Black", 
  size: "5 6 7 8 9 10", 
  price: 179.95, 
  )

  chelsea_black.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/black/boots_black_1.webp"), filename: "boots_black_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/black/boots_black_2.webp"), filename: "boots_black_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/black/boots_black_3.webp"), filename: "boots_black_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/black/boots_black_4.webp"), filename: "boots_black_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/black/boots_black_5.webp"), filename: "boots_black_5.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/black/boots_black_6.webp"), filename: "boots_black_6.webp"},
])

chelsea_ochre = Product.create!(
  name: "Chelsea Ochre", 
  product_preview: "The lug boot reimagined with signature Rollie lightness, of course. Our new Rubberised Chelsea is weather-resistant & built to go the distance. You won’t need to lug this guy around.", 
  description: "Durable rubber tread outsole extra grippy for those wet days. Water-resistant rubberised leather upper. Stay dry - rain drops will slide right off. Elasticised gusset slip on & go out. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Australian-designed using cutting-edge innovation, originality, and extreme attention to detail.", 
  category: "Women", 
  color: "Ochre Leopard Bone Black", 
  size: "5 6 7 8 9 10", 
  price: 179.95,
  )

  chelsea_ochre.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/ochre/boots_ochre_1.webp"), filename: "boots_ochre_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/ochre/boots_ochre_2.webp"), filename: "boots_ochre_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/ochre/boots_ochre_3.webp"), filename: "boots_ochre_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/ochre/boots_ochre_4.webp"), filename: "boots_ochre_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/ochre/boots_ochre_5.webp"), filename: "boots_ochre_5.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/ochre/boots_ochre_6.webp"), filename: "boots_ochre_6.webp"},
])

chelsea_leopard = Product.create!(
  name: "Chelsea Leopard", 
  product_preview: "The lug boot reimagined with signature Rollie lightness, of course. Our new Rubberised Chelsea is weather-resistant & built to go the distance. You won’t need to lug this guy around.", 
  description: "Durable rubber tread outsole extra grippy for those wet days. Water-resistant rubberised leather upper. Stay dry - rain drops will slide right off. Elasticised gusset slip on & go out. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Australian-designed using cutting-edge innovation, originality, and extreme attention to detail.", 
  category: "Women", 
  color: "Ochre Leopard Bone Black", 
  size: "5 6 7 8 9 10", 
  price: 179.95,
  )

  chelsea_leopard.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/leopard/boots_leopard_1.webp"), filename: "boots_leopard_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/leopard/boots_leopard_2.webp"), filename: "boots_leopard_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/leopard/boots_leopard_3.webp"), filename: "boots_leopard_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/leopard/boots_leopard_4.webp"), filename: "boots_leopard_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/leopard/boots_leopard_5.webp"), filename: "boots_leopard_5.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/leopard/boots_leopard_6.webp"), filename: "boots_leopard_6.webp"},
])

chelsea_bone = Product.create!(
  name: "Chelsea Bone", 
  product_preview: "The lug boot reimagined with signature Rollie lightness, of course. Our new Rubberised Chelsea is weather-resistant & built to go the distance. You won’t need to lug this guy around.", 
  description: "Durable rubber tread outsole extra grippy for those wet days. Water-resistant rubberised leather upper. Stay dry - rain drops will slide right off. Elasticised gusset slip on & go out. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Australian-designed using cutting-edge innovation, originality, and extreme attention to detail.", 
  category: "Women", 
  color: "Ochre Leopard Bone Black", 
  size: "5 6 7 8 9 10", 
  price: 179.95,
  )

  chelsea_bone.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/bone/boots_bone_1.webp"), filename: "boots_bone_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/bone/boots_bone_2.webp"), filename: "boots_bone_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/bone/boots_bone_3.webp"), filename: "boots_bone_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/bone/boots_bone_4.webp"), filename: "boots_bone_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/bone/boots_bone_5.webp"), filename: "boots_bone_5.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/boots/bone/boots_bone_6.webp"), filename: "boots_bone_6.webp"},
])

derby_chrome = Product.create!(
  name: "Derby Chrome", 
  product_preview: "Your ultimate wardrobe MVP. Our innovative hall of fame Derby combines sneaker-like comfort and dress shoe smarts. Dress up or down for 365 day styling from street to studio.Your ultimate wardrobe MVP. Our innovative hall of fame Derby combines sneaker-like comfort and dress shoe smarts. Dress up or down for 365 day styling from street to studio.", 
  description: "Cushy EVA midsoles Incredibly light and flexible to move all day (and night). Canvas and leather linings keep your feet cool and dry, you can ditch the socks. Foot hugging internal elastic Snug perfect fit, no tight laces. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Padded back collars No break-in time or ankle rubs for instant happy wears. Anti-slip rubber outsole Avoid slippery moments in our trade mark Rollie tread. Australian designed using cutting-edge innovation, originality, and extreme attention to detail", 
  category: "Women", 
  color: "Chrome Cognac Black", 
  size: "5 6 7 8 9 10", 
  price: 109.95,
  )

  derby_chrome.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/derby/chrome/derby_chrome_1.webp"), filename: "derby_chrome_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/derby/chrome/derby_chrome_2.webp"), filename: "derby_chrome_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/derby/chrome/derby_chrome_3.webp"), filename: "derby_chrome_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/derby/chrome/derby_chrome_4.webp"), filename: "derby_chrome_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/derby/chrome/derby_chrome_5.webp"), filename: "derby_chrome_5.webp"},
])

derby_cognac = Product.create!(
  name: "Derby Cognac", 
  product_preview: "Your ultimate wardrobe MVP. Our innovative hall of fame Derby combines sneaker-like comfort and dress shoe smarts. Dress up or down for 365 day styling from street to studio.Your ultimate wardrobe MVP. Our innovative hall of fame Derby combines sneaker-like comfort and dress shoe smarts. Dress up or down for 365 day styling from street to studio.", 
  description: "Cushy EVA midsoles Incredibly light and flexible to move all day (and night). Canvas and leather linings keep your feet cool and dry, you can ditch the socks. Foot hugging internal elastic Snug perfect fit, no tight laces. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Padded back collars No break-in time or ankle rubs for instant happy wears. Anti-slip rubber outsole Avoid slippery moments in our trade mark Rollie tread. Australian designed using cutting-edge innovation, originality, and extreme attention to detail", 
  category: "Women", 
  color: "Chrome Cognac Black", 
  size: "5 6 7 8 9 10", 
  price: 109.95,
  )

  derby_cognac.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/derby/cognac/derby_cognac_1.webp"), filename: "derby_cognac_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/derby/cognac/derby_cognac_2.webp"), filename: "derby_cognac_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/derby/cognac/derby_cognac_3.webp"), filename: "derby_cognac_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/derby/cognac/derby_cognac_4.webp"), filename: "derby_cognac_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/derby/cognac/derby_cognac_5.webp"), filename: "derby_cognac_5.webp"},
])

derby_black = Product.create!(
  name: "Derby Black", 
  product_preview: "Your ultimate wardrobe MVP. Our innovative hall of fame Derby combines sneaker-like comfort and dress shoe smarts. Dress up or down for 365 day styling from street to studio.Your ultimate wardrobe MVP. Our innovative hall of fame Derby combines sneaker-like comfort and dress shoe smarts. Dress up or down for 365 day styling from street to studio.", 
  description: "Cushy EVA midsoles Incredibly light and flexible to move all day (and night). Canvas and leather linings keep your feet cool and dry, you can ditch the socks. Foot hugging internal elastic Snug perfect fit, no tight laces. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Padded back collars No break-in time or ankle rubs for instant happy wears. Anti-slip rubber outsole Avoid slippery moments in our trade mark Rollie tread. Australian designed using cutting-edge innovation, originality, and extreme attention to detail", 
  category: "Women", 
  color: "Chrome Cognac Black", 
  size: "5 6 7 8 9 10", 
  price: 109.95,
  )

  derby_black.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/derby/black/derby_black_1.webp"), filename: "derby_black_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/derby/black/derby_black_2.webp"), filename: "derby_black_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/derby/black/derby_black_3.webp"), filename: "derby_black_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/derby/black/derby_black_4.webp"), filename: "derby_black_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/derby/black/derby_black_5.webp"), filename: "derby_black_5.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/derby/black/derby_black_6.webp"), filename: "derby_black_6.webp"},
])

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
  )

  penny_black.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/black/penny_loafer_black_1.webp"), filename: "penny_loafer_black_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/black/penny_loafer_black_2.webp"), filename: "penny_loafer_black_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/black/penny_loafer_black_3.webp"), filename: "penny_loafer_black_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/black/penny_loafer_black_4.webp"), filename: "penny_loafer_black_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/black/penny_loafer_black_5.webp"), filename: "penny_loafer_black_5.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/black/penny_loafer_black_6.webp"), filename: "penny_loafer_black_6.webp"},
])

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
  )

  penny_leopard.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/leopard/penny_loafer_leopard_1.webp"), filename: "penny_loafer_leopard_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/leopard/penny_loafer_leopard_2.webp"), filename: "penny_loafer_leopard_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/leopard/penny_loafer_leopard_3.webp"), filename: "penny_loafer_leopard_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/leopard/penny_loafer_leopard_4.webp"), filename: "penny_loafer_leopard_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/leopard/penny_loafer_leopard_5.webp"), filename: "penny_loafer_leopard_5.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/leopard/penny_loafer_leopard_6.webp"), filename: "penny_loafer_leopard_6.webp"},
])

  
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
  )

  penny_tan.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/tan/penny_loafer_tan_1.webp"), filename: "penny_loafer_tan_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/tan/penny_loafer_tan_2.webp"), filename: "penny_loafer_tan_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/tan/penny_loafer_tan_3.webp"), filename: "penny_loafer_tan_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/tan/penny_loafer_tan_4.webp"), filename: "penny_loafer_tan_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/tan/penny_loafer_tan_5.webp"), filename: "penny_loafer_tan_5.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/penny_loafer/tan/penny_loafer_tan_6.webp"), filename: "penny_loafer_tan_6.webp"},
])

derby_m_black = Product.create!(
  name: "Derby Classic Black", 
  product_preview: "Your new wardrobe MVP. Dress your derbies up or down for whatever’s on the agenda: morning commute to a night at the footy.", 
  description: "All New Stack Sole An added layer of cushioning EVA foam in the midsole for elevated style and comfort. Canvas and leather linings Keep your feet cool and dry, you can ditch the socks. Foot hugging internal elastic Snug perfect fit, no tight laces. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Padded back collars No break-in time or ankle rubs for instant happy wears. Anti-slip rubber outsole Avoid slippery moments in our trade mark Rollie tread. Australian designed using cutting-edge innovation, originality, and extreme attention to detail.", 
  category: "Men", 
  color: "Black Caramel Moss", 
  size: "8 9 10 11 12 13", 
  price: 109.95,
  )

  derby_m_black.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/black/derby_classic_black_1.webp"), filename: "derby_classic_black_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/black/derby_classic_black_2.webp"), filename: "derby_classic_black_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/black/derby_classic_black_3.webp"), filename: "derby_classic_black_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/black/derby_classic_black_4.webp"), filename: "derby_classic_black_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/black/derby_classic_black_5.webp"), filename: "derby_classic_black_5.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/black/derby_classic_black_6.webp"), filename: "derby_classic_black_6.webp"},
])

derby_m_caramel = Product.create!(
  name: "Derby Caramel", 
  product_preview: "Your new wardrobe MVP. Dress your derbies up or down for whatever’s on the agenda: morning commute to a night at the footy.", 
  description: "All New Stack Sole An added layer of cushioning EVA foam in the midsole for elevated style and comfort. Canvas and leather linings Keep your feet cool and dry, you can ditch the socks. Foot hugging internal elastic Snug perfect fit, no tight laces. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Padded back collars No break-in time or ankle rubs for instant happy wears. Anti-slip rubber outsole Avoid slippery moments in our trade mark Rollie tread. Australian designed using cutting-edge innovation, originality, and extreme attention to detail.", 
  category: "Men", 
  color: "Black Caramel Moss", 
  size: "8 9 10 11 12 13", 
  price: 109.95,
  )

  derby_m_caramel.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/caramel/derby_caramel_1.webp"), filename: "derby_caramel_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/caramel/derby_caramel_2.webp"), filename: "derby_caramel_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/caramel/derby_caramel_3.webp"), filename: "derby_caramel_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/caramel/derby_caramel_4.webp"), filename: "derby_caramel_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/caramel/derby_caramel_5.webp"), filename: "derby_caramel_5.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/caramel/derby_caramel_6.webp"), filename: "derby_caramel_6.webp"},
])

derby_m_moss = Product.create!(
  name: "Derby Moss", 
  product_preview: "Your new wardrobe MVP. Dress your derbies up or down for whatever’s on the agenda: morning commute to a night at the footy.", 
  description: "All New Stack Sole An added layer of cushioning EVA foam in the midsole for elevated style and comfort. Canvas and leather linings Keep your feet cool and dry, you can ditch the socks. Foot hugging internal elastic Snug perfect fit, no tight laces. Orthotic-friendly removable footbed Swap in your own insoles for a perfect fit. Padded back collars No break-in time or ankle rubs for instant happy wears. Anti-slip rubber outsole Avoid slippery moments in our trade mark Rollie tread. Australian designed using cutting-edge innovation, originality, and extreme attention to detail.", 
  category: "Men", 
  color: "Black Caramel Moss", 
  size: "8 9 10 11 12 13", 
  price: 109.95,
  )

  derby_m_moss.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/moss/derby_moss_1.webp"), filename: "derby_moss_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/moss/derby_moss_2.webp"), filename: "derby_moss_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/moss/derby_moss_3.webp"), filename: "derby_moss_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/moss/derby_moss_4.webp"), filename: "derby_moss_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/moss/derby_moss_5.webp"), filename: "derby_moss_5.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/derby/moss/derby_moss_6.webp"), filename: "derby_moss_6.webp"},
])

weekender_m_amber = Product.create!(
  name: "Weekender Amber",
  product_preview: "Experience the new wave of Australian sneaker design and world-class innovation. Get insanely comfortable with NitroBounce™ micro air bubble midsoles. Enjoy good weekend vibes, any day of the week.",
  description:"Nitrobounce™ soles Get uplifted floating above thousands of micro air bubbles. Extra padding across the tongue and back collar for feel-good wears. Orthotic-friendly removable footbed Swap in your own insoles for that perfect fit. 3M Reflective Strip Jump on your bike and be seen after dark. Australian designed using cutting-edge innovation, originality and extreme attention to detail.",
  category: "Men",
  color: "Amber Black Cobalt Mint",
  size: "8 9 10 11 12 13",
  price: 159.95,
  )

  weekender_m_amber.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/amber/weekender_amber_1.webp"), filename: "weekender_amber_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/amber/weekender_amber_2.webp"), filename: "weekender_amber_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/amber/weekender_amber_3.webp"), filename: "weekender_amber_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/amber/weekender_amber_4.webp"), filename: "weekender_amber_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/amber/weekender_amber_5.webp"), filename: "weekender_amber_5.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/amber/weekender_amber_6.webp"), filename: "weekender_amber_6.webp"},
])

weekender_m_black = Product.create!(
  name: "Weekender Black",
  product_preview: "Experience the new wave of Australian sneaker design and world-class innovation. Get insanely comfortable with NitroBounce™ micro air bubble midsoles. Enjoy good weekend vibes, any day of the week.",
  description:"Nitrobounce™ soles Get uplifted floating above thousands of micro air bubbles. Extra padding across the tongue and back collar for feel-good wears. Orthotic-friendly removable footbed Swap in your own insoles for that perfect fit. 3M Reflective Strip Jump on your bike and be seen after dark. Australian designed using cutting-edge innovation, originality and extreme attention to detail.",
  category: "Men",
  color: "Amber Black Cobalt Mint",
  size: "8 9 10 11 12 13",
  price: 159.95,
  )

  weekender_m_black.photos.attach([
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/black/weekender_black_1.webp"), filename: "weekender_black_1.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/black/weekender_black_2.webp"), filename: "weekender_black_2.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/black/weekender_black_3.webp"), filename: "weekender_black_3.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/black/weekender_black_4.webp"), filename: "weekender_black_4.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/black/weekender_black_5.webp"), filename: "weekender_black_5.webp"},
  {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/black/weekender_black_6.webp"), filename: "weekender_black_6.webp"},
])

weekender_m_cobalt = Product.create!(
  name: "Weekender Cobalt Clash",
  product_preview: "Experience the new wave of Australian sneaker design and world-class innovation. Get insanely comfortable with NitroBounce™ micro air bubble midsoles. Enjoy good weekend vibes, any day of the week.",
  description:"Nitrobounce™ soles Get uplifted floating above thousands of micro air bubbles. Extra padding across the tongue and back collar for feel-good wears. Orthotic-friendly removable footbed Swap in your own insoles for that perfect fit. 3M Reflective Strip Jump on your bike and be seen after dark. Australian designed using cutting-edge innovation, originality and extreme attention to detail.",
  category: "Men",
  color: "Amber Black Cobalt Mint",
  size: "8 9 10 11 12 13",
  price: 159.95,
  )

  weekender_m_cobalt.photos.attach([
    {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/cobalt/weekender_cobalt_clash_1.webp"), filename: "weekender_cobalt_clash_1.webp"},
    {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/cobalt/weekender_cobalt_clash_2.webp"), filename: "weekender_cobalt_clash_2.webp"},
    {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/cobalt/weekender_cobalt_clash_3.webp"), filename: "weekender_cobalt_clash_3.webp"},
    {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/cobalt/weekender_cobalt_3.webp"), filename: "weekender_cobalt_3.webp"},
    {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/cobalt/weekender_cobalt_4.webp"), filename: "weekender_cobalt_4.webp"},
    {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/women/weekender/cobalt/weekender_cobalt_5.webp"), filename: "weekender_cobalt_5.webp"},
  ])

weekender_m_mint = Product.create!(
  name: "Weekender Mint",
  product_preview: "Experience the new wave of Australian sneaker design and world-class innovation. Get insanely comfortable with NitroBounce™ micro air bubble midsoles. Enjoy good weekend vibes, any day of the week.",
  description:"Nitrobounce™ soles Get uplifted floating above thousands of micro air bubbles. Extra padding across the tongue and back collar for feel-good wears. Orthotic-friendly removable footbed Swap in your own insoles for that perfect fit. 3M Reflective Strip Jump on your bike and be seen after dark. Australian designed using cutting-edge innovation, originality and extreme attention to detail.",
  category: "Men",
  color: "Amber Black Cobalt Mint",
  size: "8 9 10 11 12 13",
  price: 159.95,
  )

  weekender_m_mint.photos.attach([
    {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/mint/weekender_mint_1.webp"), filename: "weekender_mint_1.webp"},
    {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/mint/weekender_mint_2.webp"), filename: "weekender_mint_2.webp"},
    {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/mint/weekender_mint_3.webp"), filename: "weekender_mint_3.webp"},
    {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/mint/weekender_mint_4.webp"), filename: "weekender_mint_4.webp"},
    {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/mint/weekender_mint_5.webp"), filename: "weekender_mint_5.webp"},
    {io: URI.open("https://reels-2-dev.s3.us-west-1.amazonaws.com/men/weekender/mint/weekender_mint_6.webp"), filename: "weekender_mint_6.webp"},
  ])

puts "Done!"
