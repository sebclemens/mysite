# Syntax

preferred_syntax = :sass

# Folder settings
relative_assets = true                  # because we're not working from the root
css_dir = "../Public/Styles"            # where the CSS will saved
sass_dir = "Styles"                     # where our .scss files are
images_dir = "../Public/Images"         # the folder with your images (relative path)
fonts_dir = "../Public/Fonts"           # the folder with your fonts

# Setting Foundation as additional import path
add_import_path "node_modules/foundation-sites/scss"

# preferred output style (can be overridden via the command line)
output_style = :compressed              # alternative: :expanded

# environments
environment = :production
line_comments = false
