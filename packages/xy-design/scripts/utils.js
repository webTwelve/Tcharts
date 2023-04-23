const fs = require("fs");
const path = require("path");
const dir = path.resolve(__dirname, "..", "lib");
function loadModule(name) {
  try {
    return require(name);
  } catch (e) {
    return undefined;
  }
}

function copy(name, version) {
  const src = path.join(dir, `v${version}`, name);
  const dest = path.join(dir, name);
  try {
    let content = fs.readFileSync(src, "utf-8");
    try {
      fs.unlinkSync(dest);
    } catch (e) {}
    fs.writeFileSync(dest, content, "utf-8");
  } catch (error) {
    console.error(error);
  }
}

function switchVersion(version) {
  copy("index.js", version);
  copy("index.mjs", version);
  copy("index.umd.js", version);
  copy("style.css", version);
}

module.exports.loadModule = loadModule;
module.exports.switchVersion = switchVersion;
