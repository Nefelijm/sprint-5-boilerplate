const express = require('express');
const app = express();
app.listen(8080, () => {
  console.log('servidor encendido');
});
app.use(express.static('public'));