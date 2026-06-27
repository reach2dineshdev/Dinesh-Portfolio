const crypto = require('crypto');
const https = require('https');

function getSRI(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const hash = crypto.createHash('sha384').update(data).digest('base64');
        console.log(url, `sha384-${hash}`);
        resolve();
      });
    });
  });
}

(async () => {
  await getSRI('https://unicons.iconscout.com/release/v4.0.0/css/line.css');
  await getSRI('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css');
})();
