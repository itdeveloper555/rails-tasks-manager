# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#seed_file = Rails.root.join('db', 'seeds', 'seeds.yml')
#config = YAML::load_file(seed_file)



config = HashWithIndifferentAccess.new(YAML.load_file(Rails.root.join('db', 'seeds', 'seeds.yml')))




config["projects"].each{ 
	|line|
	project = Project.create({:title => line["title"] })
	todo = project.todos.create(line["todos"])
}

