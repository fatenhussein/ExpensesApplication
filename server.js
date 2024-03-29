const mongoose = require('mongoose');
const dotEnv = require('dotenv');
dotEnv.config({
  path: './config.env',
});
const DB = process.env.DATA_BASE.replace('<password>', process.env.PASSWORD);  
mongoose.connect(DB).then(() => console.log('Connect to db'));

const app = require('./src/app');
const port =process.env.PORT ;

app.listen(port, () => {
  console.log('server is waiting for request... by faten hussein');
});
