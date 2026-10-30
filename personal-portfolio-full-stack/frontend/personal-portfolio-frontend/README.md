# Personal Portfolio — Frontend

Responsive portfolio website built with HTML5, CSS3 and vanilla JavaScript.

## Run locally
1. Start the backend first (see backend README).
2. Open `index.html` in VS Code with Live Server, or serve this folder with any static web server.
3. The contact form sends data to `http://localhost:5000/api/contact`.

To change the API URL, edit `API_BASE` at the top of `script.js` or set `window.PORTFOLIO_API_URL` before loading the script.

## Customize
- Replace the name, about text, email and GitHub link in `index.html`.
- Edit the project cards with your actual project names and links.
- Update skill lists and colors in `style.css`.

## Deploy to Vercel
Import this folder as a project in Vercel. Framework preset: Other; build command: leave blank; output directory: `.`. Set `window.PORTFOLIO_API_URL` to your deployed backend API URL in `index.html` before `script.js`, or update `API_BASE` in `script.js`.
