const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretKey = 'Rajasthan Hackathon 1.0';

const port = 3001;

// check which route to listen to
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173',
}));

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: "3006",
  password: 'hellomysql',
  database: 'main',
});

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Function to generate JWT token
function generateToken(user) {
  return jwt.sign(user, secretKey, { expiresIn: '1h' });
}

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }
    req.user = user;
    next();
  });
}

// Register user
app.post('/register', (req, res) => {
  const { FirstName, LastName, EmailId, AdharId, ContactNumber, Address, Pincode, City, pwd } = req.body;

  bcrypt.hash(pwd, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: 'Error hashing password' });
    }

    const user = {
      FirstName,
      LastName,
      EmailId,
      AdharId,
      ContactNumber,
      Address,
      Pincode,
      City,
      pwd: hashedPassword,
    };

    const sql = 'INSERT INTO user SET ?';

    db.query(sql, user, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error registering user' });
      }

      const token = generateToken({ EmailId, UserId: result.insertId });
      res.status(201).json({ message: 'User registered successfully', token });
    });
  });
});

// Login user
app.post('/login', (req, res) => {
  const { EmailId, pwd } = req.body;

  const sql = 'SELECT * FROM user WHERE EmailId = ?';

  db.query(sql, [EmailId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching user' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = results[0];

    bcrypt.compare(pwd, user.pwd, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: 'Error comparing passwords' });
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = generateToken({ EmailId, UserId: user.UserId });
      res.status(200).json({ message: 'Login successful', token });
    });
  });
});

// Example protected route using JWT token
app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Protected route', user: req.user });
});


// Additional routes for handling complains, branches, etc. can be added similarly.

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
