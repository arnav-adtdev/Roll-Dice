const express = require('express');
const mongoose = require('mongoose');
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

// // Connect to MongoDB with error handling
// mongoose.connect('mongodb://localhost:27017/diceGameDB', {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
// }).then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Define Schema & Model
// const userSchema = new mongoose.Schema({
//     name: String,
//     course: String,
// });

// const User = mongoose.model('User', userSchema);

// Handle form submission
// app.post('/submit', async (req, res) => {
//     try {
//         const { name, course } = req.body;
//         if (!name || !course) {
//             return res.status(400).json({ error: "Name and Course are required" });
//         }

//         const newUser = new User({ name, course });
//         await newUser.save();
//         res.json({ message: "Data saved successfully!" });
//     } catch (error) {
//         console.error("Error saving data:", error);
//         res.status(500).json({ error: "Error saving data" });
//     }
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
