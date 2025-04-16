const express = require('express');

const cors = require('cors');
const path = require('path'); // Added missing import

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' })); // Allow requests from all origins

// Set Pug as the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'ARNAV PORTFOLIO' });
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

