# Personal Portfolio — Backend API

Node.js, Express and MongoDB REST API for saving portfolio contact form submissions.

## Requirements
- Node.js 18+
- MongoDB Community Server running locally, or a MongoDB Atlas connection string

## Setup (Windows PowerShell / VS Code terminal)
```powershell
cd personal-portfolio-backend
npm install
Copy-Item .env.example .env
```
Edit `.env` if your MongoDB URI or frontend origin is different.

## Run
```powershell
npm run dev
```
API: `http://localhost:5000`
Health check: `http://localhost:5000/api/health`

## Endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | API status |
| GET | `/api/health` | API and MongoDB status |
| POST | `/api/contact` | Validate and save a message |
| GET | `/api/contact` | List saved messages (development/admin use) |

Example POST JSON:
```json
{
  "name": "Alex",
  "email": "alex@example.com",
  "subject": "Project enquiry",
  "message": "I would like to discuss a website project."
}
```

Messages are stored in the `contacts` collection in the `personal_portfolio` database. The GET messages endpoint is intentionally included for local development; protect it with authentication before exposing it publicly.

## Deployment
Deploy the API to Render, Railway, or another Node host. Configure `MONGODB_URI`, `PORT` (provided by host), and `CLIENT_ORIGIN` with your deployed frontend domain. Then update the frontend `API_BASE` in `script.js` to `https://your-api-domain/api`. Do not commit `.env`.
