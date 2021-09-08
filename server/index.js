const express = require('express');

const HOST = 'localhost';
const PORT = 3000;

const app = express();

app.use((req, res) => res.status(200).json({ success: 'Wingardium, leviosa!' }));

app.listen(PORT, HOST, () => console.log(`Server listening on http://${HOST}:${PORT}`));
