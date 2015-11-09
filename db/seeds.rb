# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

2.times do
 user = User.create(
   email: Faker::Internet.email,
   password_digest: Faker::Internet.password
 )
 1.times do

   user.Mood.create(
   happiness: 10
   )
 end
end
