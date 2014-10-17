require "middleman-smusher"

###
# Blog settings
###

# Time.zone = "UTC"

activate :blog do |blog|
  blog.permalink = "/blog/:title"
  blog.sources = "/blog/:title.html"
  blog.layout = "blog_layout"
  blog.summary_separator = /\[READMORE\]/
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

  # Use relative URLs
  # activate :relative_assets

  # Favicons are great
  activate :favicon_maker, :icons => {
    "_favicon_template.png" => [
      { icon: "apple-touch-icon-152x152-precomposed.png" },
      { icon: "apple-touch-icon-144x144-precomposed.png" },
      { icon: "apple-touch-icon-120x120-precomposed.png" },
      { icon: "apple-touch-icon-114x114-precomposed.png" },
      { icon: "apple-touch-icon-76x76-precomposed.png" },
      { icon: "apple-touch-icon-72x72-precomposed.png" },
      { icon: "apple-touch-icon-60x60-precomposed.png" },
      { icon: "apple-touch-icon-57x57-precomposed.png" },
      { icon: "apple-touch-icon-precomposed.png", size: "57x57" },
      { icon: "apple-touch-icon.png", size: "57x57" },
      { icon: "favicon-196x196.png" },
      { icon: "favicon-160x160.png" },
      { icon: "favicon-96x96.png" },
      { icon: "favicon-32x32.png" },
      { icon: "favicon-16x16.png" },
      { icon: "favicon.png", size: "16x16" },
      { icon: "favicon.ico", size: "64x64,32x32,24x24,16x16" },
      { icon: "mstile-144x144", format: "png" },
    ]
  }

  # Compress PNGs after build
  activate :smusher

  # Activate GZipping
  activate :gzip

  # Or use a different image path
  # set :http_path, "/Content/images/"
end