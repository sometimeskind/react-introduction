const express = require('express');

express()
  .use(express.static('dist'))
  .get('/', (req, res) => res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <div id="app"></div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react-dom.js"></script>
      <script src="/client.js"></script>
  `))
  .listen(3000, () => { console.log('listening'); });
