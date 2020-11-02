const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

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
      console.log(messages);
    })
    .catch((err) => {
      return res.status(500).json({ error: err.code });
    });
};
