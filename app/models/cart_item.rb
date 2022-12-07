# == Schema Information
#
# Table name: cart_items
#

#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
  validates :product_id, :user_id, :product_name, :size, :price, :quantity, presence: true
  # validates :product_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :product
end
