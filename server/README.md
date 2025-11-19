# UpDown Robotics Local Backend

This is a simple Node.js/Express backend for handling form submissions from your React frontend.

## Features
- POST `/api/contact` — Store contact form submissions
- POST `/api/pilot-program` — Store pilot program form submissions
- GET `/api/contact` — Retrieve all contact form submissions
- GET `/api/pilot-program` — Retrieve all pilot program form submissions
- Data is stored in local JSON files (`contact.json`, `pilot-program.json`) in the `server` directory
- CORS enabled for local development

## Setup & Usage

1. **Install dependencies:**
   ```sh
   cd server
   npm install
   ```
2. **Start the backend server:**
   ```sh
   npm start
   ```
   The server will run on http://localhost:4000 by default.

3. **API Endpoints:**
   - POST `/api/contact` — expects JSON body
   - POST `/api/pilot-program` — expects JSON body
   - GET `/api/contact` — returns all contact submissions
   - GET `/api/pilot-program` — returns all pilot program submissions

4. **Data Storage:**
   - Submissions are appended to `contact.json` and `pilot-program.json` in the `server` folder.

## Example cURL

```
curl -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Hello!"}'
```

---

You can now connect your frontend forms to these endpoints for local development and testing.
