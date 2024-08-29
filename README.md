![Logo](assets/icon64.jpg)
# Aluminum CSS
Minimal CSS boilerplate to make your next page shine. 

[Docs](https://pr0gramista.github.io/aluminiumcss) | [Cute demo]([https://demo.](https://pr0gramista.github.io/aluminiumcss)) | [npm](https://www.npmjs.com/package/aluminiumcss)

## Features
- CSS only
- Selective styling - you can apply Aluminium CSS globally or selectively on just a few elements
- Easy to customize - just a bunch of CSS variables
- Utilities included - positioning, spacings in Tailwind CSS style
- CSS grid system
- Basic navbar and footer

## Installation
Aluminium CSS works best as a single link tag in the `<head>` of your HTML document:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aluminiumcss/dist/aluminium.min.css">
```

You can also install Aluminium CSS via NPM:
```bash
npm install aluminiumcss
```

And then import it in your JS file, assuming you are using a bundler:
```javascript
require('aluminiumcss/dist/aluminium.min.css')
```

## Motivation
I have seen way too many bare HTML pages. While many other CSS styles exist there are't many that are minimal and easy to customize.
I also kept missing some of the core Tailwind CSS utilities, so I included a variation of them in this project.
