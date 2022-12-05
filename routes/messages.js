const router = require("express").Router();
const Message = require("../models/Message");
const Notifications = require("../models/Notifications");

//add
router.post("/", async (req, res) => {
  const newMessage = new Message(req.body);

  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get
router.get("/:conversationId", async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

//add notification
router.post("/notification", async (req, res) => {
  const newNotification = new Notifications(req.body);

  try {
    const savedNotification = await newNotification.save();
    res.status(200).json(savedNotification);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get notification
router.get("/notification/all", async (req, res) => {
  try {
    const notification = await Notifications.find();
    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
