const { sendThreadEmail} = require("./subscription_controller");

const { Router } = require("express");
const router = Router();

router.post("/api/subscriptions/send-alerts", sendThreadEmail);

module.exports = router;
