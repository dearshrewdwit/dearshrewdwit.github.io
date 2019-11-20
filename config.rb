require 'redcarpet'

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# activate syntax highlighting
activate :syntax, :inline_theme => Rouge::Themes::Base16::Solarized.new

# set markdown flavour
set :markdown_engine, :redcarpet
set :markdown,
  tables:true,
  autolink:true,
  gh_blockcode: true,
  fenced_code_blocks: true,
  with_toc_data: true

# Loads js
activate :sprockets

# Reloads changes for dev
activate :livereload, :host => "127.0.0.1"

# Pretty URLs
activate :directory_indexes

# Blog config
activate :blog do |blog|
  blog.prefix = "blog"
  blog.permalink = "{category}/{title}"
  blog.sources = "{category}/{title}.html"
  blog.tag_template = "blog/tag.html"
  blog.calendar_template = "blog/calendar.html"
  blog.layout = "blog_layout"
end

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
page "/blog/", :layout => "blog_layout"

page '/404.html', directory_index: false

# Set static roots
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

# Set available variables
set :my_email, "edwardawithers@gmail.com"

# Build config
configure :build do
  activate :minify_css
  activate :minify_javascript
end

# Deploy config
activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.branch = 'master'
  deploy.build_before = true
end
