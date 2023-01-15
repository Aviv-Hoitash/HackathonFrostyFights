const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/fight', require('./routes/fight'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
