const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();
require('./db/index.js');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
