const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.static(path.join(__dirname, '/Users/ryanpannone/HR/webpack-babel-practice/dist')));
app.engine('html', require('ejs').renderFile);
app.use('/', (req, res) => {
  res.render('index.html')
})
app.set('view engine', 'html');

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`);
});