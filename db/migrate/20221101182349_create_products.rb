class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :product_preview, null: false
      t.text :description, null: false
      t.string :category, null: false
      t.string :color, null: false
      t.string :size, null: false
      t.float :price, null: false
      t.timestamps
    end
    add_index :products, :name, unique: true
  end
end
