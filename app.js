const express = require('express');
const app = express();
const mongoose = require("mongoose");
const messages = require("./routes/messages");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/keys").mongoURI;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

//testing simple request
// app.get("/", (req, res) => res.send("Hello World"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// const messagesRoute = require('./routes/messages')
app.use('/messages', messages);
// app.set('view engine', 'pug')

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`TMWSD is listening at http://localhost:${port}`)
})
