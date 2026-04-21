const express = require("express");
const app = express();

app.use(express.json());

app.post("/create-payment", (req, res) => {
    // Later you will call PhonePe API here
    res.json({
        success: true,
        message: "Payment request created (dummy)"
    });
});

app.post("/callback", (req, res) => {
    console.log("Payment confirmation:", req.body);
    res.sendStatus(200);
});

app.listen(3000, () => console.log("Server running"));