# Theme Name

This is a Hugo theme for the LLVM Compiler Infrastructure project. It provides a clean and modern design for the LLVM website.

## Features

- Clean and modern design
- Responsive layout
- Easy configuration via `hugo.toml` or `config.toml`

## Installation

1. Clone the repository into your Hugo site's `themes` directory:
   ```sh
   git clone https://github.com/llvm/www-template themes/www-template
   ```
2. Update your site's `hugo.toml` or `config.toml` file to use the theme:
   ```toml
   theme = "www-template"
   ```
3. Run your site locally with the theme:
   ```sh
   hugo server
   ```

## Configuration

`hugo.toml`

The `hugo.toml` file contains various configuration options for the theme. Below is an excerpt with explanations for each option:

```toml
baseURL = 'https://example.org/'
languageCode = 'en-us'
title = 'The LLVM Compiler Infrastructure'

[[menus.main]]
name = 'Getting Started'
pageRef = '/'
weight = 10

[[menus.main]]
name = 'Docs'
pageRef = '/docs'
weight = 20

[[menus.main]]
name = 'Blogs'
pageRef = '/blogs'
weight = 30

[[menus.main]]
name = 'Resources'
pageRef = '/resources'
weight = 40

[[menus.main]]
name = 'Downloads'
pageRef = '/downloads'
weight = 50

[module]
  [module.hugoVersion]
    extended = false
    min = "0.116.0"

[params]
  # only first 4 links will be displayed
  [[params.hero_section_links]]
    title = "Latest Release"
    icon = "ri-hashtag"
    url = "/"
```

### Configuration Options

- `baseURL`: The base URL for the site.
- `languageCode`: The language code for the site.
- `title`: The title of the site.

#### Menus

- `menus.main`: The main menu items for the site.
  - `name`: The name of the menu item.
  - `pageRef`: The page reference for the menu item.
  - `weight`: The weight of the menu item.

#### Hero Section Links

The params.hero_section_links section defines the links displayed in the hero section. Only the first 4 links will be displayed. Each link has the following properties:

- `params.hero_section_links`: The links displayed in the hero section.
  - `title`: The title of the link.
  - `icon`: The icon for the link.
  - `url`: The URL for the link.
