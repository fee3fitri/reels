class RemoveProductNameFromCartItems < ActiveRecord::Migration[7.0]
  def change
    remove_column :cart_items, :product_name, :string
    remove_column :cart_items, :size, :string
    remove_column :cart_items, :price, :foat

    add_column :cart_items, :product_name, :string, null:false
    add_column :cart_items, :size, :string, null:false
    add_column :cart_items, :price, :float, null:false
  end
end
