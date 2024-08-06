const express = require('express');
const cors = require('cors'); // CORS desteği eklemek için
const app = express();

// CORS orta katmanını ekle
app.use(cors());

// Kullanıcılar listesi
const users = [
    { id: 1, name: "Ali Basboga", years: 17 },
    { id: 2, name: "M.Reşit", years: 16 },
    { id: 3, name: "M.Ali", years: 7 },
    { id: 4, name: "Hazar", years: 5 }
];

// Kullanıcılar API rotaları
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Sunucuyu başlat
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
