const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3001;

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_database_user',
  password: 'your_database_password',
  database: 'your_database_name',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Simulated storage for generated OTPs
const otpStorage = new Map();

app.post('/api/send-otp', function (req, res) {
  const { mobileNumber } = req.body;
  if (!mobileNumber) {
    return res.status(400).json({ error: 'Mobile number is required' });
  }

  // Generate a random 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000);

  otpStorage.set(mobileNumber, otp);
  //key
  //HHTZZK231T9P7TH1SAR2E5V7

  try {
    // Send the OTP via Twilio SMS
    await client.messages.create({
      body: `Your OTP is: ${otp}`,
      to: `+${mobileNumber}`, 
      from: 'your_twilio_phone_number',
    });

  console.log(req.body);
});

// Route to submit a claim
app.post('/submit-claim', (req, res) => {
  const { complainantName } = req.body;

  // Perform the necessary database operations to submit a claim
  // In a real-world scenario, you'd use a database ORM or query builder
  db.query('INSERT INTO claims (complainant_name) VALUES (?)', [complainantName], (err, result) => {
    if (err) {
      console.error('Error submitting claim:', err);
      res.status(500).json({ status: 'Error submitting claim' });
      return;
    }

    console.log('Claim submitted successfully');
    res.json({ status: 'Claim submitted successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
