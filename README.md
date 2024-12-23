# Inventory Management System

A full-stack inventory management system built with modern technologies to help businesses track and manage their inventory effectively.

## Tech Stack

### Backend
- Node.js with Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- REST API
- Security features with Helmet middleware
- CORS enabled
- Morgan for HTTP request logging

### Frontend
- Next.js 15
- React 19
- TypeScript
- Redux Toolkit for state management
- Redux Persist for local storage
- Material-UI (MUI) components
- Recharts for data visualization
- TailwindCSS for styling
- Axios for API requests

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v8 or higher)
- PostgreSQL (v14 or higher)
- Docker (optional, for containerization)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd inventory-management
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Set up environment variables:

Backend (.env):
```env
PORT=8000
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/inventorymanagement?schema=public"
```

Frontend (.env.local):
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

5. Initialize the database:
```bash
cd ../backend
npx prisma migrate dev --name init
npm run seed
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```
The server will start on http://localhost:8000

2. In a new terminal, start the frontend development server:
```bash
cd frontend
npm run dev
```
The application will be available at http://localhost:3000

## Docker Setup (Optional)

To run the application using Docker:

1. Build and start the containers:
```bash
docker-compose up --build
```

2. The services will be available at:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:8000
   - PostgreSQL: localhost:5432

## Development

### Backend Development
- The backend uses TypeScript for type safety
- Prisma is used as the ORM for database operations
- API routes are defined in the `src/routes` directory
- Controllers are in the `src/controllers` directory
- Database schema is defined in `prisma/schema.prisma`

### Frontend Development
- Built with Next.js for server-side rendering capabilities
- Uses TypeScript for type safety
- Redux Toolkit for state management
- Material-UI components for UI elements
- TailwindCSS for custom styling
- Responsive design for mobile and desktop views

## Project Structure

```
inventory-management/
├── backend/
│   ├── src/
│   ├── prisma/
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env.local
├── docker-compose.yml
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.
