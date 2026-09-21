# Express.js Tutorial

A step-by-step walkthrough of Express.js: routing, middleware, error
handling, static files, and organizing routes with `express.Router()`.
Each step is its own file so you can run and test them one at a time.

Uses Express 4 (the version the tutorial's `app.all('*', ...)` wildcard
route was written for).

## Setup

```bash
npm install
```

## Steps

Each file below can be run on its own with `node <file>`, then tested at
`http://localhost:8080`.

| Step | File | What it covers |
|---|---|---|
| 2 | `app.js`* | A basic server: `GET /` → "Hello World from Express!" |
| 3 | `routes.js` | GET/POST on the same path, a second route, and a 404 fallback |
| 4 | `route-params.js` | Reading values out of the URL path (`/users/:userId/books/:bookId`) |
| 5 | `query-params.js` | Reading `?q=...&category=...` from the URL |
| 6 | `middleware.js` | Built-in middleware: JSON body parsing, form parsing, static files |
| 7 | `error-handling.js` | One error handler that catches both sync and async errors |
| 8 | `static-files.js` | Serving images/CSS/JS from a `public` folder, three different ways |
| 9 | `routes/users.js`, `routes/products.js`, `app.js`* | Splitting routes into separate files with `express.Router()` |

\* `app.js` starts as the Step 2 "Hello World" server and is replaced by
the Step 9 version, which is the final state of the file — that's how the
tutorial itself is structured.

## Try it

```bash
node app.js
# then in your browser:
#   http://localhost:8080/            -> "Main application home page"
#   http://localhost:8080/users/      -> "Users home page"
#   http://localhost:8080/users/42    -> "User profile for ID: 42"
#   http://localhost:8080/products/   -> "Products list"
#   http://localhost:8080/products/99 -> "Product details for ID: 99"
```

Every step above was run and verified locally, including sending POST
requests with `curl` (in place of Postman) to confirm the JSON and
error-handling routes behave exactly as the tutorial describes.

## Note

This covers the tutorial steps only (1 through 9). The final "Express.js
Assignment" (build a `/products` GET + POST API and submit separately) is
intentionally not included here.
