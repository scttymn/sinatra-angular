source 'https://rubygems.org'
gem 'sinatra'

gem 'json'
gem 'data_mapper'
gem 'sinatra-cross_origin'

# When developing an app locally you can use SQLite which is a relational
# database stored in a file. It's easy to set up and just fine for most
# development situations.
group :development do
  gem 'dm-sqlite-adapter'
  gem 'pry'
  gem 'pry-debugger'
end

# Heroku uses Postgres however, so we tell the Gemfile to use Postgres
# in production instead of SQLite.
group :production do
  gem 'pg'
  gem 'dm-postgres-adapter'
end
