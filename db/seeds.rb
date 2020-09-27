# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
Zone.create!( value: "Madrid",
              offset: -8)

Zone.create!( value: "Detroit",
              offset: -14)

Zone.create!( value: "Kuala_Lumpur",
              offset: -2)

data = ActiveSupport::JSON.decode(File.read("db/zone.json"))
Zone.create(data)
