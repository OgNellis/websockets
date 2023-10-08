const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use('/static', express.static(__dirname + '../public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/index.html'));
})
app.get(/\/(.*\.html$)/, (req, res) => {
    const filename = req.params[0];
    res.sendFile(path.join(__dirname, `../pages/${filename}`));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})