const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "exercises");

let result = [];

function walk(dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);

    if (fs.statSync(fullPath).isDirectory()) {
      const exerciseFile = path.join(fullPath, "exercise.json");

      if (fs.existsSync(exerciseFile)) {
        const data = JSON.parse(fs.readFileSync(exerciseFile, "utf-8"));
        result.push(data);
      }
    }
  }
}

walk(baseDir);

fs.writeFileSync(
  "all_exercises.json",
  JSON.stringify(result, null, 2)
);

console.log("Done!");
