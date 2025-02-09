const express = require('express');
 const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const connectMongoDB = require('./Config/connectMongoDB');

const userRoutes = require('./Routes/userRouter');
const eventRoutes = require('./Routes/eventRouter'); 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3800;

// Middleware
app.use(cors({
    origin: "https://event-management-project-frontend.onrender.com", //Update with your frontend URL
    credentials: true,
  }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Parses incoming JSON
app.use(express.urlencoded({ extended: true })); // Parses form data

app.use('/api/auth', userRoutes);
app.use('/api', eventRoutes);


// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Authentication Backend Server!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectMongoDB();
});
