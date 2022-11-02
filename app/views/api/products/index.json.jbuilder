@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :product_preview, :description, :category, :color, :size, :price, :image_url
  end
end