const fs = require("fs");

try {
  const contents = fs.readFileSync("config.production.json", "utf8");
  const config = JSON.parse(contents);
  const externalURL = process.env.URL || process.env.RENDER_EXTERNAL_URL;
  if (externalURL) {
    // update the URL in the config
    config.url = externalURL;
    fs.writeFileSync("config.production.json", JSON.stringify(config, null, 2));
  }
} catch (error) {
  console.error("Error updating config:", error.message);
  process.exit(1);
}
