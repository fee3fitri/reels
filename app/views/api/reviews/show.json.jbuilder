json.extract! @review,
  :id,
  :user_id,
  :product_id,
  :title,
  :body,
  :rating

json.name @review.user.name