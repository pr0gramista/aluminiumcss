const CleanCSS = require("clean-css");
const fs = require("fs");

// Specify the paths to your CSS files
const inputFiles = ["normalize.css", "sanitize.css", "style.css"];

// Read the content of the CSS files
const cssContent = inputFiles
  .map((path) => fs.readFileSync(path, "utf8"))
  .join("");

// Initialize a new instance of CleanCSS
const cleaner = new CleanCSS();

// Minify the combined CSS content
const output = cleaner.minify(cssContent);

// Specify the path for the output file
const outputPath = "dist/aluminium.min.css";

// Write the minified CSS to the output file
fs.writeFileSync(outputPath, output.styles);
