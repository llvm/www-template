# www-template

This is a Hugo theme for the LLVM Compiler Infrastructure project. It provides a clean and modern design for the LLVM website.

## Table of contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Creating new website](#creating-new-website)
- [Creating new pages](#creating-new-pages)
- [Using YAML data files](#using-yaml-data-files)
- [Creating new shortcodes](#creating-new-shortcodes-using-yaml-data-files)

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

[markup.goldmark.renderer] 
  unsafe= true

# Navigation Bar Menu
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
name = 'Doxygen '
pageRef = '/'
weight = 1
parent = 'Resources'

[[menus.main]]
name = 'GitHub'
pageRef = '/'
weight = 2
parent = 'Resources'

[[menus.main]]
name = 'Code Review'
pageRef = '/'
weight = 3
parent = 'Resources'

[[menus.main]]
name = 'Downloads'
pageRef = '/downloads'
weight = 50

[module]
  [module.hugoVersion]
    extended = false
    min = "0.116.0"


# Hero section links

[params]
  logo = "images/logo.png"
  navbar_logo = "images/logo.png"
  subtitle = 'The LLVM Project is a collection of modular and reusable compiler and toolchain technologies. Despite its name, LLVM has little to do with traditional virtual machines. The name "LLVM" itself is not an acronym; it is the full name of the project.  '

  [[params.hero_section_buttons]]
    title = "Get Started"
    url = "/get-started"
    type = "primary"
  [[params.hero_section_buttons]]
    title = "Releases"
    url = "https://releases.llvm.org"
    type = "secondary"

  # only first 4 links will be displayed
  [[params.hero_section_links]]
    title = "Latest Release"
    icon = "ri-hashtag"
    url = "/"
  [[params.hero_section_links]]
    title = "Upcoming Events"
    icon = "ri-play-large-line"
    url = "#upcoming_events"
  [[params.hero_section_links]]
    title = "Read the Docs"
    icon = "ri-book-open-line"
    url = "/"
  [[params.hero_section_links]]
    title = "Explore subprojects"
    icon = "ri-projector-line"
    url = "/"

# Table of contents config

[markup]
  [markup.tableOfContents]
    startLevel = 2
    endLevel = 4

# Footer config

[params.footer]
title = "The LLVM Compiler Infrastructure"

[[params.footer.columns]]
title = "LLVM"
links = [
  { text = "Features", url = "#" },
  { text = "Documentation", url = "#" },
  { text = "Blog", url = "#" },
  { text = "FAQ", url = "#" },
  { text = "Resources", url = "#" },
  { text = "Download", url = "#" }
]

[[params.footer.columns]]
title = "Dev. Resources"
links = [
  { text = "Doxygen", url = "#" },
  { text = "Sources (GitHub)", url = "#" },
  { text = "Code Review", url = "#" },
  { text = "Bug Tracker", url = "#" },
  { text = "Green Dragon", url = "#" },
  { text = "LNT", url = "#" },
  { text = "Scan Build", url = "#" },
  { text = "llvm-cov", url = "#" },
  { text = "Compile-time tracker", url = "#" }
]

[[params.footer.columns]]
title = "About LLVM"
links = [
  { text = "Mission", url = "#" },
  { text = "Community", url = "#" },
  { text = "Events", url = "#" },
  { text = "Sponsors", url = "#" },
  { text = "Contact", url = "#" }
]

```

### Configuration Options

- `baseURL`: The base URL for the site.
- `languageCode`: The language code for the site.
- `title`: The title of the site.
- `markup.goldmark.renderer.unsafe`: Enable unsafe HTML in markdown.
- `menus.main`: The main menu items for the site.
- `params.logo`: The logo for the site.
- `params.navbar_logo`: The logo for the navbar.
- `params.subtitle`: The subtitle for the site.
- `params.hero_section_buttons`: The buttons displayed in the hero section.
  - `title`: The title of the button.
  - `url`: The URL for the button.
  - `type`: The type of the button (primary or secondary).
- `params.hero_section_links`: The links displayed in the hero section.
  - `title`: The title of the link.
  - `icon`: The icon for the link.
  - `url`: The URL for the link.
- `markup.tableOfContents`: The table of contents configuration.
  - `startLevel`: The starting level for the table of contents.
  - `endLevel`: The ending level for the table of contents.
- `params.footer`: The footer configuration.
  - `title`: The title of the footer.
  - `columns`: The columns in the footer.
    - `title`: The title of the column.
    - `links`: The links in the column.
      - `text`: The text of the link.
      - `url`: The URL of the link.


## Creating New Website

To create a new website using the theme, follow these steps:

1. Create a new Hugo site:
   ```sh
   hugo new site my-site
   ```

2. Change into the new site directory:
   ```sh
    cd my-site
    ```

3. Clone the theme into the `themes` directory:
    ```sh
    git clone
    ```
4. Install Post CSS CLI
    ```sh
    npm install postcss-cli
    ```
5. Update the `config.toml` file to use the theme:
    ```toml
    theme = "www-template"
    ```
6. Run the site locally:
    ```sh
    hugo server
    ```
7. Open the site in your browser:
    ```
    http://localhost:1313
    ```
8. Customize the site by updating the configuration options in the `config.toml` file.


## Creating New Pages

To create new pages, use the following command:

```sh
hugo new <page-name>/_index.md
```

For example, to create a new page named `about`, run the following command:

```sh
hugo new about/_index.md
```

Front matter for the new page will be created automatically. Update the front matter with the desired content e.g.:

```markdown
---
title: Sample Page
description: Markdown tutorial and syntax examples for common elements.
date: 2023-01-15T09:00:00-07:00
draft: false
tags: ["markdown"]
toc: true
---
```

You can find and example page in the `content/sample-page/_index.md` file.

## Using YAML Data Files

The theme supports YAML data files for defining content. To use YAML data files,
create a new file in the `data` directory, refer to the other data files for the
structure.

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


## Creating New Shortcodes (using YAML Data Files)

Create a new shortcode (e.g. `new_short_code.html`) in the `layouts/shortcodes` directory. In the shortcode file, use the `datamap.html` shortcode to display the data. 

It is a `HTML` file, so you can use `HTML` tags to style the data.

More on shortcodes can be found in the HUGO docs [here](https://gohugo.io/templates/shortcode/).
