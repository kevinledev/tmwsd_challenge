var express = require("express");
(";");
var router = express.Router();
const Message = require("../models/Message");
const validateMessageInput = require("../validation/messages");

// test route
router.get("/test", (req, res) =>
  res.json({ msg: "This is the messages route" })
);

// GET all messages
router.get("/", (req, res) => {
  Message.find()
    .then((messages) => res.status(200).json(messages))
    .catch((err) =>
      res.status(404).json({
        nomsgsfound: "No messages found",
        err: err,
      })
    );
});

// GET a specific message by ID
router.get(
  "/:id", (req, res) => {
    Message.findById(req.params.id)
      .then((message) => res.status(200).json(message))
      .catch((err) =>
        res.status(404).json({
          nomsgfound: "No message found with that ID",
          err: err,
        })
      );
  }
);

// CREATE a message
router.post("/new", (req, res) => {
  const { errors, isValid } = validateMessageInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newMessage = new Message({
    title: req.body.title,
    body: req.body.body,
  });

  newMessage.save().then((message) => res.status(200).json(message));
});

//DELETE a message
router.delete(
  "/:id", (req, res) => {
    Message.findByIdAndDelete(req.params.id)
      .then((message) => res.status(200).json(message))
      .catch((err) =>
        res.status(500).json({
          msgnotdeleted: "There was an error deleting the message",
          err: err,
        })
      );
  }
);

module.exports = router;
