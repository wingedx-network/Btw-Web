const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // const apkUrl = 'https://drive.google.com/uc?export=download&id=1fZc4fjCbicMPFYY_2cPYbwl3QdRxpIIM';
  const apkUrl = 'https://www.dropbox.com/scl/fi/5ecg9rprvy1egyt9vtjal/btw.apk?rlkey=9746t6nba7eqmwss8o0ahrbht&st=cl8ie0v4&dl=1';
  res.redirect(apkUrl);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});