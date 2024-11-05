# 🧰 Job Board API

A simple RESTful API for managing job listings and candidate applications. This API allows users to create, retrieve, update, and delete job listings and applications, along with optional filtering and searching capabilities.

## 🌐 Live API

Access the live API at the following URL:

🔗 [Job Board API](https://jobboardapi-sfpq.onrender.com)

### Base URL
`https://jobboardapi-sfpq.onrender.com/api`

---

## 🔒 User Authentication

To access the protected endpoints of the Job Board API, users must first register and log in to receive a JSON Web Token (JWT) for authentication.

### 1️⃣ Register a User

- **Endpoint**: `POST /api/auth/register`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
### 2️⃣ Login a User

**Endpoint**: POST /api/auth/login
**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

## 📚 API Endpoints

### 📌 Job Listings

- **Create a Job Listing**
  - `POST /api/jobs`
  - **Request Body**: 
    ```json
    {
      "title": "Job Title",
      "description": "Job Description",
      "skills": ["skill1", "skill2"],
      "location": "Job Location",
      "experienceLevel": "junior/senior"
    }
    ```

- **Retrieve All Job Listings**
  - `GET /api/jobs`

- **Retrieve Job Listings with Filters**
  - `GET /api/jobs/filter`
  - **Query Parameters**: `title`, `location`, `skills` (optional)

- **Search for Jobs by Keyword**
  - `GET /api/jobs/search`
  - **Query Parameter**: `keyword`

- **Update a Job Listing**
  - `PUT /api/jobs/:id`
  - **Request Body**: Same as create job.

- **Delete a Job Listing**
  - `DELETE /api/jobs/:id`

### 👤 Candidate Applications

- **Submit a Candidate Application**
  - `POST /api/applications`
  - **Request Body**: 
    ```json
    {
      "candidateName": "John Doe",
      "email": "john.doe@example.com",
      "experience": "3 years",
      "appliedJobId": "jobId",
      "status": "pending"
    }
    ```

- **Retrieve All Applications for a Job**
  - `GET /api/applications/job/:jobId`

- **Filter Applications**
  - `GET /api/applications/filter`
  - **Query Parameters**: `status`, `candidateName` (optional)

## 🛠️ Setting Up Locally

To set up the API on your local machine, follow these steps:

### 📋 Prerequisites

- Node.js (v14 or later)
- MongoDB (local installation or MongoDB Atlas account)

### 📥 Clone the Repository

```bash
git clone https://github.com/yourusername/job-board-api.git
cd job-board-api
```

### 📦 Install Dependencies

```bash
npm install
```

### 📝 Set Up Environment Variables

Create a .env file in the root of your project and add your environment variables:
```makefile
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 🚀 Run the Application
```bash
npm start
```

The API should now be running on http://localhost:5000. 

## 🔍 Testing the API

You can use tools like Postman or curl to test the API endpoints.   
### Example Request
To create a new job listing:

```bash
curl -X POST http://localhost:5000/api/jobs \
-H "Content-Type: application/json" \
-d '{
  "title": "Software Engineer",
  "description": "Develop software applications.",
  "skills": ["JavaScript", "Node.js"],
  "location": "Remote",
  "experienceLevel": "junior"
}'
```

## 📂 Postman Collection

A Postman collection is provided to demonstrate the API endpoints. You can import it into your Postman application to test the API easily.

### Importing the Collection
1. Open Postman.
2. Click on the "Import" button in the top left corner.
3. Select "Upload Files" and choose the `JobBoardAPI.postman_collection.json` file.
4. The collection will be added to your Postman workspace, and you can start testing the API endpoints.
