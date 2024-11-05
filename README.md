# Job Board API

A simple RESTful API for managing job listings and candidate applications. This API allows users to create, retrieve, update, and delete job listings and applications, along with optional filtering and searching capabilities.

## Live API

You can access the live API at the following URL:

[Job Board API](https://jobboardapi-sfpq.onrender.com)

### Base URL
https://jobboardapi-sfpq.onrender.com/api


## API Endpoints

### Job Listings

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

- **Get a Specific Job by ID**
  - `GET /api/jobs/:id`

- **Update a Job Listing**
  - `PUT /api/jobs/:id`
  - **Request Body**: Same as create job.

- **Delete a Job Listing**
  - `DELETE /api/jobs/:id`

### Candidate Applications

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

## Setting Up Locally

To set up the API on your local machine, follow these steps:

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local installation or MongoDB Atlas account)

### Clone the Repository

```bash
git clone https://github.com/yourusername/job-board-api.git
cd job-board-api
