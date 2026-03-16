# CareSync Hospital Management - Deployment Guide

This project is prepared for production deployment.

## Architecture
- **Frontend**: Next.js (React) - Recommended: [Vercel](https://vercel.com)
- **Backend**: Node.js (Express) - Recommended: [Render](https://render.com) or [Railway](https://railway.app)
- **Database**: MongoDB - Recommended: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Deployment Steps

### 1. Database (MongoDB Atlas)
1. Create a free cluster on MongoDB Atlas.
2. Get your connection string (e.g., `mongodb+srv://...`).
3. Allow `0.0.0.0/0` in Network Access for deployment.

### 2. Backend (Render)
1. Push the code to a GitHub repository.
2. Connect the repository to Render (Web Service).
3. Set the root directory to `backend`.
4. Add the following Environment Variables:
   - `MONGO_URI`: Your Atlas connection string.
   - `JWT_SECRET`: A long random string.
   - `FRONTEND_URL`: Your Vercel frontend URL (once deployed).

### 3. Frontend (Vercel)
1. Connect the same GitHub repository to Vercel.
2. Set the root directory to `frontend`.
3. Add the following Environment Variable:
   - `NEXT_PUBLIC_API_URL`: Your Render backend URL + `/api` (e.g., `https://caresync-api.onrender.com/api`).

---
Prepared by Antigravity AI.
