const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // const apkUrl = 'https://drive.google.com/uc?export=download&id=1fZc4fjCbicMPFYY_2cPYbwl3QdRxpIIM';
  const apkUrl = 'https://www.dropbox.com/scl/fi/d5amnedp4eo7nbg38vmr6/btw.apk?rlkey=y9mescnylm1nxmypbhftix65t&st=7shnohvt&dl=1';
  res.redirect(apkUrl);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});