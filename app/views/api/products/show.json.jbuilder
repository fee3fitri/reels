json.extract! @product, 
  :id, 
  :name, 
  :product_preview, 
  :description, 
  :category, 
  :color, 
  :size, 
  :price

if product.photos.attached?
  json.imgUrls product.photos.map{ |photo| photo.url }
else
  json.imgUrls ""