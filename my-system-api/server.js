const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5001;

// connect to db
connectDB();

// init middleware
//app.use(cors); 
app.use(bodyParser.json());
app.use(express.json({ extended: false}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// define routes
app.use('/api/register', require('./routes/api/register'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/dashboard', require('./routes/api/dashboard'));

app.get('/', (req, res) => {
    res.send('root');
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})