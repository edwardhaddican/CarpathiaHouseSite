const mongoose = require("mongoose");
const uri =
  process.env.NODE_ENV === "production"
    ? process.env.MONGODB_URI
    : "mongodb://localhost/carpathia";

const db = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "MongoDB connection error:"));
