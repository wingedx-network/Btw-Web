const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // const apkUrl = 'https://drive.google.com/uc?export=download&id=1fZc4fjCbicMPFYY_2cPYbwl3QdRxpIIM';
  const apkUrl = 'https://www.dropbox.com/scl/fi/ewez5ob14l0uer4u74zfk/btw.apk?rlkey=0ylwlgeleseolr9p40e0mbdyi&st=bn0mo9or&dl=1';
  res.redirect(apkUrl);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});