require "middleman-smusher"

###
# Blog settings
###

# Time.zone = "UTC"

activate :blog do |blog|
  blog.permalink = "/blog/:title"
  blog.sources = "/blog/:title.html"
  blog.layout = "blog_layout"
end

page "/feed.xml", :layout => false

activate :directory_indexes
page "/404.html", :directory_index => false

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable Asset Hashing
  activate :asset_hash

  # Compress PNGs after build
  activate :smusher

  # Activate GZipping
  activate :gzip

  # Favicons are great
  activate :favicon_maker

  # Or use a different image path
  # set :http_path, "/Content/images/"
end