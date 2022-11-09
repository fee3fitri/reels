class AddProductNameToCartItems < ActiveRecord::Migration[7.0]
  def change
    add_column :cart_items, :product_name, :string, null: false, default: false
    add_column :cart_items, :size, :string, null: false, default: false
    add_column :cart_items, :price, :float, null: false, default: false
  end
end
