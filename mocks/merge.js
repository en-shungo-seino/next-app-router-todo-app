/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const root = 'mocks/data';

let apiRes = {};
const allFile = fs.readdirSync(root, { withFileTypes: false });

allFile.forEach((file) => {
  const endpoint = path.basename(file, path.extname(file));
  apiRes[endpoint] = JSON.parse(fs.readFileSync(root + '/' + file, 'utf-8'));
});

fs.writeFileSync('mocks/db.json', JSON.stringify(apiRes), function (err) {
  if (err) throw err;
});
