require "middleman-smusher"

###
# Blog settings
###

# Time.zone = "UTC"

activate :blog do |blog|
  # blog.prefix = "blog"
  blog.permalink = "/blog/:year/:month/:day/:title.html"
  blog.sources = "/blog/:year-:month-:day-:title.html"
  blog.taglink = "/blog/tags/:tag.html"
  blog.layout = "blog_layout"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  blog.year_link = "/blog/:year.html"
  blog.month_link = "/blog/:year/:month.html"
  blog.day_link = "/blog/:year/:month/:day.html"
  # blog.default_extension = ".markdown"

  blog.tag_template = "/blog/tag.html"
  blog.calendar_template = "/blog/calendar.html"

  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/:num"
end

page "/feed.xml", :layout => false
page "/", :layout => "home_layout"
page "/about.html", :layout => "home_layout"

activate :directory_indexes
page "/404.html", :directory_index => false

###
# Compass
###

# Susy grids in Compass
# First: gem install susy
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

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

  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  activate :smusher

  # Activate GZipping
  activate :gzip

  # Favicons are great
  activate :favicon_maker

  # Or use a different image path
  # set :http_path, "/Content/images/"
end