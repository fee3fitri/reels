# == Schema Information
#
# Table name: products
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  product_preview :string           not null
#  description     :text             not null
#  category        :string           not null
#  color           :string           not null
#  size            :string           not null
#  price           :float            not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Product < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :product_preview, :description, :category, :color, :size, :price, presence: true

  has_many :cart_items
  has_many :users,
    through: :cart_items
  has_many_attached :photos
end
