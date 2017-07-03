class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :name
      t.string :type
      t.integer :rounds_played
      t.timestamps
    end
  end
end
