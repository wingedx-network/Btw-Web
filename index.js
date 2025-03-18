const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // const apkUrl = 'https://drive.google.com/uc?export=download&id=1fZc4fjCbicMPFYY_2cPYbwl3QdRxpIIM';
  const apkUrl = 'https://www.dropbox.com/scl/fi/hovvoipb7j4begkb37wlx/btw.apk?rlkey=dld7z65kt3wv8im5brh9bpo09&st=epb6ywph&raw=1';
  res.redirect(apkUrl);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});