const express = require('express');
const app = express();
const mongoose = require("mongoose");

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));



//testing simple request
app.get("/", (req, res) => res.send("Hello World"));

// const messagesRoute = require('./routes/messages')
// app.use('/', messagesRoute)
// app.set('view engine', 'pug')

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`TMWSD is listening at http://localhost:${port}`)
})
