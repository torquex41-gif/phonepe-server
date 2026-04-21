const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/create-payment", (req, res) => {
    res.json({
        success: true,
        message: "Payment request created (dummy)"
    });
});

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(3000, () => console.log("Server running"));
