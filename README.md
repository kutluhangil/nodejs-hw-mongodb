<h1>📡 Node.js Homework 02 — Contacts API with MongoDB</h1>

<p>
This project is part of the <strong>GOIT Node.js course</strong>.
The goal of this homework is to build a simple <strong>REST API</strong>
that works with a collection of contacts using <strong>MongoDB</strong>
and <strong>Express.js</strong>.
</p>

<p>
The application allows users to retrieve all contacts or fetch a single
contact by its ID via HTTP requests.
The backend is deployed and publicly available using
<strong>Render.com</strong>.
</p>

<hr />

<h2>🔗 Project Links</h2>

<ul>
<li>
<strong>GitHub Repository:</strong><br>
<a href="https://github.com/kutluhangil/nodejs-hw-mongodb" target="_blank">
https://github.com/kutluhangil/nodejs-hw-mongodb
</a>
</li>

<li>
<strong>Live API (Render):</strong><br>
<a href="https://contacts-app-kuzj.onrender.com" target="_blank">
https://contacts-app-kuzj.onrender.com
</a>
</li>
</ul>

<hr />

<h2>🛠 Technologies Used</h2>

<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>MongoDB Atlas</li>
<li>Mongoose</li>
<li>CORS</li>
<li>Pino HTTP Logger</li>
<li>ESLint</li>
<li>Prettier</li>
<li>Nodemon</li>
<li>Render (Deployment)</li>
</ul>

<hr />

<h2>📌 Application Features</h2>

<ul>
<li>Express server setup</li>
<li>MongoDB Atlas database connection</li>
<li>Mongoose contact model</li>
<li>REST API endpoints for retrieving contacts</li>
<li>Error handling with proper status codes</li>
<li>Environment variables configuration</li>
<li>Cloud deployment using Render</li>
</ul>

<hr />

<h2>🧭 API Endpoints</h2>

<h3>Get all contacts</h3>

<pre>
GET /contacts
</pre>

Response example:

<pre>
{
  "status": 200,
  "message": "Successfully found contacts!",
  "data": [...]
}
</pre>

<h3>Get contact by ID</h3>

<pre>
GET /contacts/:contactId
</pre>

Response example:

<pre>
{
  "status": 200,
  "message": "Successfully found contact with id {contactId}!",
  "data": {...}
}
</pre>

If contact does not exist:

<pre>
{
  "message": "Contact not found"
}
</pre>

<hr />

<h2>📂 Project Structure</h2>

<pre>
src/
├── controllers/
│   └── contacts.js
├── db/
│   └── initMongoConnection.js
├── models/
│   └── Contact.js
├── services/
│   └── contacts.js
├── index.js
└── server.js
</pre>

<hr />

<h2>⚙️ Environment Variables</h2>

The application uses environment variables to connect to MongoDB.

Example configuration:

<pre>
PORT=3000
MONGODB_USER=your_user
MONGODB_PASSWORD=your_password
MONGODB_URL=your_cluster_url
MONGODB_DB=contactsdb
</pre>

These variables should be configured in:

<ul>
<li>.env (local development)</li>
<li>Render Environment Variables (production)</li>
</ul>

<hr />

<h2>🚀 Deployment</h2>

The backend is deployed using <strong>Render.com</strong>.

Deployment steps:

<ol>
<li>Push project to GitHub</li>
<li>Create a Web Service on Render</li>
<li>Select the <code>hw2-mongodb</code> branch</li>
<li>Add environment variables</li>
<li>Set start command</li>
</ol>

<pre>
node src/index.js
</pre>

After deployment, the API becomes publicly available.

<hr />

<h2>✅ Homework Requirements</h2>

<ul>
<li>Repository created: <strong>nodejs-hw-mongodb</strong></li>
<li>Development branch: <strong>hw2-mongodb</strong></li>
<li>MongoDB Atlas database connection</li>
<li>Contacts collection imported</li>
<li>Routes implemented</li>
<li>Application deployed to Render</li>
</ul>

<hr />

<h2>🎯 Final Result</h2>

<p>
The project successfully demonstrates how to build a basic
<strong>Node.js REST API</strong>, connect it to a
<strong>MongoDB database</strong>, and deploy the backend
to a cloud service.
</p>

<p>
This homework helped reinforce concepts such as
<strong>Express routing</strong>,
<strong>MongoDB data modeling</strong>,
<strong>environment configuration</strong>,
and <strong>backend deployment</strong>.
</p>

<hr />

<p><strong>Happy coding 🚀</strong></p>
