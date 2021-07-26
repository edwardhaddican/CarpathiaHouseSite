const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost/carpathia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conn = mongoose.connection
conn.on('error', console.error.bind(console, "MongoDB connection error:"))





