const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Task 1: Dummy Auth
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password123') {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false });
    }
});

// Task 4: Song Data API
app.get('/api/songs', (req, res) => {
    res.json([
        { id: 1, name: "Chill Vibes", artist: "Lofi Girl", url: "https://file-examples.com/wp-content/storage/2017/11/file_example_MP3_700KB.mp3", img: "https://picsum.photos/200/300.jpg" },
        { id: 2, name: "Night Drive", artist: "Synthwave", url: "https://file-examples.com/wp-content/storage/2017/11/file_example_MP3_1MG.mp3", img: "https://picsum.photos/200/300.webp" }
    ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
