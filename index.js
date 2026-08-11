const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const PORT = 3000;


app.use(express.json());


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

app.use('/news', require('./routes/newsRoutes'));




app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
