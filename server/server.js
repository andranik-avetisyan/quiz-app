const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require('./routes');

require('dotenv').config();
require('./database/db');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
