const express = require("express");
const app = express();

// Define route to serve API data
app.get("/api/nay", function(req, res) {
    const data = [
        { name: "win" },
        { age: 41 }
    ];
    return res.status(200).json(data);
});

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
    console.log(`Server is running on http://localhost:${PORT}`);
});
