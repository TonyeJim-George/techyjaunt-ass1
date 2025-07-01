# Student CRUD API

This is a RESTful API built with Node.js, Express.js, and MongoDB for managing student records. It supports full CRUD operations and includes optional features like pagination and filtering.

---

## Setup and Run Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/TonyeJim-George/techyjaunt-ass1.git
cd techyjaunt-ass1
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment File

Create a `.env` file in the root directory and add the following:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/studentdb
```

Replace the MongoDB URI with your own if you're using MongoDB Atlas.

### 4. Run the Server

#### For development (with auto-reload):

```bash
npm run dev
```

#### For production:

```bash
npm start
```

Server will start on `http://localhost:5000`

---

## API Endpoints

| Method | Endpoint            | Description                                        |
| ------ | ------------------- | -------------------------------------------------- |
| POST   | /api/students       | Create a new student                               |
| GET    | /api/students       | Get all students (supports pagination & filtering) |
| PUT    | /api/students/\:id  | Update a student by ID                             |
| DELETE | /api/students/\:id  | Delete a student by ID                             |
| GET    | /api/students/count | Get total count of student records                 |

---

## Postman Collection

You can also view the documentation here:\
(https://documenter.getpostman.com/view/40310248/2sB34ZrjFS) \*

---

## Assumptions & Design Decisions

- `email` must be unique and is enforced at the database level.
- All fields (`firstName`, `lastName`, `email`, `age`) are required on creation.
- Responses return JSON with meaningful messages or data.
- If a student with a given `id` does not exist, the API returns a 404 Not Found.
- Optional query parameters:
  - `?page=1&limit=10` for pagination
  - `?lastName=Smith` for filtering by last name
- Error handling includes:
  - `400 Bad Request` for missing/invalid inputs
  - `409 Conflict` for duplicate emails
  - `500 Internal Server Error` for server/database issues

---

## Folder Structure

```
techyjaunt-ass1/
│__ src
  ├── controllers/         # Request handlers (student logic)
  ├── models/              # MongoDB schemas
  ├── routes/              # Express route definitions
  ├── config/              # DB connection
  ├── server.js
├── .env                 # Environment variables (not committed)
├── .gitignore
├── README.md


```

---
