const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.json({ salute: 'Hola drone demo!'});
});

app.listen(app.get('port'), () => {
  console.log(`Drone API is listening to port ${app.get('port')}`);
});

module.exports = app;