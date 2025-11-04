# Bright API

Simple Node.js Express API with multiple URLs (routes).

## Prerequisites
- Node.js 18+

## Install
```bash
npm install
```

## Run
```bash
npm run start
# or with autoreload (Node 18+)
npm run dev
```

## Endpoints
- GET `/health` - service health
- GET `/api` - API info and available routes
- Users
  - GET `/api/users`
  - POST `/api/users` { name }
  - GET `/api/users/:id`
- Products
  - GET `/api/products`
  - GET `/api/products/:id`

## Notes
- Data is in-memory for demo purposes.
- Change port via `PORT` env var (default 3000).

