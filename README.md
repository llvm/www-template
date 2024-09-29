# www template

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
3. Install Post CSS CLI
   ```sh
   npm install postcss-cli 
   ```
4. Run your site locally with the theme:
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

## Creating New Pages

To create new pages, use the following command:

```sh
hugo new <page-name>/_index.md
```

For example, to create a new page named `about`, run the following command:

```sh
hugo new about/_index.md
```

## Using YAML Data Files

The theme supports YAML data files for defining content. To use YAML data files, create a new file in the `data` directory, refer to the other data files for the structure.

Then use the `datamap.html` shortcode.

### Usage of `datamap.html` Shortcode

```markdown
{{< datamap 
    "data_file_name" "data_array" 
    "title" 
    "description" 
    "expected_result" 
>}}
```

- `data_file_name`: The name of the data file.
- `data_array`: The name of the array in the data file.
- `title`: The title of the data item.
- other fields: The fields of the data item.




