const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // ✅ THIS FIXES YOUR ISSUE
app.use(express.json());

app.post("/create-payment", (req, res) => {
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
