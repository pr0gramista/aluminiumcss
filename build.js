const CleanCSS = require("clean-css");
const { table } = require("console");
const fs = require("fs");
const mustache = require("mustache");

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

const template = fs.readFileSync("index.template.html", "utf8");

const outputPage = mustache.render(template, {
  input: fs.readFileSync("parts/input.html", "utf8"),
  textarea: fs.readFileSync("parts/textarea.html", "utf8"),
  radio: fs.readFileSync("parts/radio.html", "utf8"),
  checkbox: fs.readFileSync("parts/checkbox.html", "utf8"),
  table: fs.readFileSync("parts/table.html", "utf8"),
  button: fs.readFileSync("parts/button.html", "utf8"),
  select: fs.readFileSync("parts/select.html", "utf8"),
  details: fs.readFileSync("parts/details.html", "utf8"),
  blockquote: fs.readFileSync("parts/blockquote.html", "utf8"),
  dialog: fs.readFileSync("parts/dialog.html", "utf8"),
  nav: fs.readFileSync("parts/nav.html", "utf8"),
  footer: fs.readFileSync("parts/footer.html", "utf8"),
  grid: fs.readFileSync("parts/grid.html", "utf8"),
  gridDefault: fs.readFileSync("parts/grid-default.html", "utf8"),
  spacer: fs.readFileSync("parts/spacer.html", "utf8"),
  row: fs.readFileSync("parts/row.html", "utf8"),
  column: fs.readFileSync("parts/column.html", "utf8"),
  centered: fs.readFileSync("parts/centered.html", "utf8"),
  selective: fs.readFileSync("parts/selective.html", "utf8"),
  container: fs.readFileSync("parts/container.html", "utf8"),
  positioning: fs.readFileSync("parts/positioning.html", "utf8"),
});

fs.writeFileSync("index.html", outputPage);
