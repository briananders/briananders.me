module ImageHelper

  require 'pathname'

  # Generates a nl-responsive-image which has the following
  # properties:
  #
  # If :resize_source is true, will resize the source image
  #   to the specified :height and :width
  #
  # A placeholder svg will be inserted at the specified or
  #   source :height and :width to enable responsive resizing
  #
  # The class .not-loaded will be added so JavaScript can move
  # the data-src or data-src-2x attribute value to the src value
  # as needed (ie when in view)
  #
  # @param src [String] src Path to regular image
  # @param options [Hash] data
  # @return [String] HTML tag
  def image_tag(src, options={})

    src_2x = retina_src(src)

    # Check for localized images
    if Pathname.new(source).exist?
      src_2x = retina_src(src)
    end

    # responsive images require height/width to scale properly
    # this will be used to set the height and width on our svg
    unless options[:height] and options[:width]
      path = src.start_with?('http') ? src : File.join(source, src)
      file = MiniMagick::Image.open(path)
      options[:width]  = (file[:width].to_f).ceil
      options[:height] = (file[:height].to_f).ceil
    end

    # Really only works well if you are starting
    # from a larger image
    if options.delete(:resize_source)

      # Create Retina thumbnail
      src_2x, options = resize_image(src, options.merge(:resize => 2))

      # Create Regular thumbnail, save location
      src, options = resize_image(src, options)
    end

    options[:class] ||= ''
    options[:class]  += ' responsive-img'
    options[:class].strip!

    options[:'data-src'] = image_path(src)
    if Pathname.new(source + src_2x).exist?
      options[:'data-src-2x'] = image_path(src_2x)
    else
      options[:'data-src-2x'] = image_path(src)
      warn "Could not find 2x image for #{src}" unless src.include?('/blog/') or src.end_with?('.svg')
    end

    if options[:alt].nil?
      warn "Missing alt attribute for #{src} on #{current_page.data.title}"
    end

    responsive_img = super(src, options)

    %Q(#{responsive_img})
  end

  private

  # Calculates the path to the Retina version
  # of the specified resource
  #
  # for example foo.png would be translated into
  # foo_2x.png
  #
  # @private
  # @param src [String] src attribute for resource
  # @return [String] Retina version of src attribute
  def retina_src(src)
    ext = Pathname.new(src).extname
    src.sub %r(#{ext}$), "_2x#{ext}"
  end
end