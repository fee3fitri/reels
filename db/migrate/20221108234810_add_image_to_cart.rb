class AddImageToCart < ActiveRecord::Migration[7.0]
  def change
    add_column :cart_items, :imageUrl, :string
  end
end
