---
title: Sample Page
description: Markdown tutorial and syntax examples for common elements.
date: 2023-01-15T09:00:00-07:00
draft: false
tags: ["markdown"]
toc: true
---

## Headings

# H1 Heading

## H2 Heading

### H3 Heading

#### H4 Heading

##### H5 Heading

###### H6 Heading

---

## Paragraphs and Line Breaks

This is a paragraph.  
This is a new line (two spaces before this line).

This is another paragraph with multiple lines.  
Notice the line breaks.

---

## Emphasis

**Bold text**

_Italic text_

**_Bold and Italic text_**

~~Strikethrough text~~

---

## Blockquotes

> This is a blockquote.
>
> Nested blockquote:
>
> > This is a nested blockquote.

---

## Lists

### Unordered Lists

- Item 1
  - Nested Item 1
  - Nested Item 2
    - Deeper Nested Item
- Item 2
- Item 3

### Ordered Lists

1. First item
2. Second item
   1. Nested item
   2. Another nested item
      1. Deeper nested item
3. Third item

---

## Links

[This is a simple link](https://www.example.com)

[Link with title](https://www.example.com "Example Website")

---

## Images

![Alt text for the image](https://via.placeholder.com/150)

![Image with title](https://via.placeholder.com/150 "Sample Image")

---

## Code Blocks

### Inline code

Here is some `inline code` inside a paragraph.

### Fenced Code Block

```
def hello_world():
    print("Hello, World!")
```

### Code block with specific language

```python
# Python code example
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```

```js
// JavaScript code example
function greet() {
  console.log("Hello, World!");
}
```

---

## Horizontal Rule

---

---

## Tables

| Syntax   | Description |
| -------- | ----------- |
| Header 1 | Content 1   |
| Header 2 | Content 2   |

| Name    | Age | Country |
| ------- | --- | ------- |
| Alice   | 30  | USA     |
| Bob     | 25  | Canada  |
| Charlie | 35  | UK      |

---

## Task Lists

- [x] Task 1 (completed)
- [ ] Task 2 (incomplete)
- [ ] Task 3 (incomplete)

---

## HTML in Markdown

This is a paragraph with <strong>bold</strong> and <em>italic</em> text using HTML tags.

<p>This is a paragraph written directly in HTML.</p>

---

## Definition Lists

Term 1  
: Definition for Term 1

Term 2  
: Definition for Term 2

---

## Footnotes

Here is a sentence with a footnote.[^1]

[^1]: This is the footnote text.

---

## Emojis

This is a smiley face emoji: 😄

This is a thumbs-up emoji: 👍

---

## Escaping Characters

Use the backslash (`\`) to escape markdown characters:

\* This is not italic.  
\# This is not a heading.
