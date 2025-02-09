# Unhandled Error in Express.js Route Handler
This repository demonstrates a common error in Express.js applications: missing error handling in route handlers.  Specifically, the `/users/:id` route fails to handle cases where `req.params.id` is invalid, potentially causing server crashes or unexpected behavior.

The `bug.js` file shows the problematic code.  The `bugSolution.js` file provides a corrected version with proper error handling.

## How to reproduce
1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `npm install` to install express.
4. Run `node bug.js`.
5. Try accessing the route with an invalid user ID (e.g., `/users/abc`).  Observe the error.
6. Run `node bugSolution.js`.
7. Try accessing the route with an invalid user ID (e.g., `/users/abc`).  Observe the improved error handling.

## Solution
The solution involves adding appropriate error handling using try-catch blocks or middleware.