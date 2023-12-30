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
