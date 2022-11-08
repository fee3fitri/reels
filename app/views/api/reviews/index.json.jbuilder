@reviews.each do |review|
  json.set! review.id do
    json.extract! review,
      :id,
      :user_id,
      :product_id,
      :title,
      :body,
      :rating

      json.name  review.user.name
  end
end