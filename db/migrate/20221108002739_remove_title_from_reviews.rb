class RemoveTitleFromReviews < ActiveRecord::Migration[7.0]
  def change
    remove_column :reviews, :title, :string
    add_column :reviews, :title, :string, null:false
  end
end
