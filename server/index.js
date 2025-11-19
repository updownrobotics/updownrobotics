const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { getSubmissions } = require('./utils');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Helper to save data to a file
function saveSubmission(file, data) {
  const filePath = path.join(__dirname, file);
  let submissions = [];
  if (fs.existsSync(filePath)) {
    try {
      submissions = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      submissions = [];
    }
  }
  submissions.push({ ...data, submittedAt: new Date().toISOString() });
  fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
}

// POST: Store contact form submission
app.post('/api/contact', (req, res) => {
  saveSubmission('contact.json', req.body);
  res.json({ success: true });
});

// POST: Store pilot program form submission
app.post('/api/pilot-program', (req, res) => {
  saveSubmission('pilot-program.json', req.body);
  res.json({ success: true });
});

// POST: Store newsletter subscription
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ success: false, error: 'Invalid email' });
  }
  saveSubmission('newsletter.json', { email });
  res.json({ success: true });
});

// GET: Retrieve all contact form submissions
app.get('/api/contact', (req, res) => {
  const data = getSubmissions('contact.json');
  res.json(data);
});

// GET: Retrieve all pilot program form submissions
app.get('/api/pilot-program', (req, res) => {
  const data = getSubmissions('pilot-program.json');
  res.json(data);
});

// GET: Retrieve all newsletter subscriptions
app.get('/api/newsletter', (req, res) => {
  const data = getSubmissions('newsletter.json');
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
