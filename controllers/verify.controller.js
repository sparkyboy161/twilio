const { client } = require("../configs/twillio");

module.exports.startVerifying = async function (req, res) {
  client.verify
    .services(process.env.TWILIO_SERVICE_SID)
    .verifications.create({ to: "+84983161124", channel: "sms" })
    .then((verification) => res.json({ verification }))
    .catch((err) => res.status(500).json({ err: err.code }));
};

module.exports.verify = async function (req, res) {
  const { verification } = req.body;
  client.verify
    .services(process.env.TWILIO_SERVICE_SID)
    .verifications(verification)
    .fetch()
    .then((verification) => console.log(verification.status));
};
