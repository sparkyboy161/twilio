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
      messages.push(message);
    }
    return res.json({ messages });
  } catch (err) {
    return res.status.json({ errors: err });
  }
};
