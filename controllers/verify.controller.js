const { client } = require("../configs/twillio");

module.exports.startVerifying = async function (req, res) {
  const { phoneNumber, friendlyName } = req.body;
  client.validationRequests
    .create({ friendlyName, phoneNumber })
    .then((validation_request) => {
      return res.json(validation_request);
    })
    .catch(err=>{
      return res.status(500).json({err})
    })
};

module.exports.verify = async function (req, res) {
  const { verificationCode, phoneNumber } = req.body;
  console.log(verificationCode);
  client.verify
    .services(process.env.VERIFICATION_SID)
    .verificationChecks.create({ code: verificationCode, to: phoneNumber })
    .then((verification) => {
      return res.json(verification);
    })
    .catch((e) => {
      return res.status(500).send(e);
    });
};
