![Logo](https://github.com/pr0gramista/aluminiumcss/raw/main/icon64.jpg)
# Aluminum CSS
Minimal CSS boilerplate to make your next page shine. 

[Docs](https://aluminiumcss.pr0gramista.com) | [Cute demo](https://aluminiumcss.pr0gramista.com/cute) | [npm](https://www.npmjs.com/package/aluminiumcss)

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

To apply styles add `.alu-all` to your body class or use `.alu` to particular elements.

## Motivation
I have seen way too many bare HTML pages. While many other CSS styles exist there are't many that are minimal and easy to customize.
I also kept missing some of the core Tailwind CSS utilities, so I included a variation of them in this project.

## Contributing
Contributions are welcome, but please keep in mind that this project is meant to be a minimal CSS boilerplate. If you are unsure about the implementation of a feature, please open an issue first and I'll be happy to help 💛

## License
MIT