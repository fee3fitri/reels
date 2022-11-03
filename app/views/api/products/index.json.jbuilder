@products.each do |product|
  json.set! product.id do
    json.extract! product, 
      :id, 
      :name, 
      :product_preview, 
      :description, 
      :category, 
      :color, 
      :size, 
      :price
    json.img_urls product.photos.map{ |photo| url_for(photo) }
  end
end