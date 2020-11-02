const { client } = require("../configs/twillio");

module.exports.send = async function (req, res) {
  const { recipents, body } = req.body;
  //   const messages = [];

  Promise.all(
    recipents.map((recipent) => {
      return client.messages.create({
        to: recipent,
        from: process.env.TWILIO_MESSAGING_SERVICE_SID,
        body: body,
      });
    })
  )
    .then((messages) => {
      return res.json({messages})
    })
    .catch((err) => {
      return res.status(500).json({ error: err.code });
    });
};
