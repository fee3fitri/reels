# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  body       :text
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
  validates :user_id, :product_id, :title, presence: true
  validates :product_id, uniqueness: {scope: :user_id}
  validates :rating, numericality: {in: 1..5}

  belongs_to :user
  belongs_to :product
end
