const express = require('express');
const path = require('path');
const app = express();
require("./db.json");
require{}
// Serve images from the "images" directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Example endpoint to list available images
app.get('/api/images', (req, res) => {
    const images = [
        { id: 1, url: '/images/image1.jpg' },
        { id: 2, url: '/images/image2.jpg' },
        { id: 3, url: '/images/image3.jpg' },
    ];
    res.json(images);
});

const PORT = 6000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`) );