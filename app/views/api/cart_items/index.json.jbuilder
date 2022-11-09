@cart_items.each do |cart_item|
  json.set! cart_item.id do
    json.extract! cart_item,
      :id,
      :user_id,
      :product_id,
      :product_name,
      :size,
      :price,
      :quantity,
      :image_url
  end
end