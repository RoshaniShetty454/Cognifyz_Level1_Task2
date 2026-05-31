const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// Temporary storage
let users = [];

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/submit", (req, res) => {

    const { name, email, password } = req.body;

    // Server-side validation
    if (!name || !email || !password) {
        return res.send("All fields are required!");
    }

    if (password.length < 6) {
        return res.send("Password must be at least 6 characters!");
    }

    // Store data temporarily
    users.push({ name, email });

    res.render("result", { name, email });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});