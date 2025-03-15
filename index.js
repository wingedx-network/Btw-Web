const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // const apkUrl = 'https://drive.google.com/uc?export=download&id=1fZc4fjCbicMPFYY_2cPYbwl3QdRxpIIM';
  const apkUrl = 'https://www.dropbox.com/scl/fi/8r4adem0cg93zxljrf5wb/btw.apk?rlkey=dhocaukhuurhqd9t81wlb4pt6&st=gg2ufmrg&dl=1';
  res.redirect(apkUrl);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});