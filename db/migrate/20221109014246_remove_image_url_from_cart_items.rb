class RemoveImageUrlFromCartItems < ActiveRecord::Migration[7.0]
  def change
    remove_column :cart_items, :imageUrl
    add_column :cart_items, :image_url, :string
  end
end
