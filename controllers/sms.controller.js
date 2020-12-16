const { client } = require("../configs/twillio");

module.exports.send = async function (req, res) {
  const { recipents, body } = req.body;
  const messages = [];

  try {
    for (recipent of recipents) {
      const message = await client.messages.create({
        body,
        from: process.env.TWILIO_MESSAGING_SERVICE_SID,
        to: recipent,
      });
      console.log(message)
      messages.push(message);
    }
    return res.json({ messages });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errors: err });
  }
};
