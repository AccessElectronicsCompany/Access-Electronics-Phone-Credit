# Access Electronics Phone Credit Platform

## Overview
This full-stack web application enables Access Electronics customers to request credit-based phone purchase quotes. It features a React frontend, an Express.js backend, and a PostgreSQL database with Drizzle ORM. The platform includes a credit calculation system with a 16.8% interest rate and flexible payment terms (12, 24, or 36 months). Key capabilities include a comprehensive phone catalog, real-time credit calculations, and a robust quote request system. The project aims to provide a streamlined, user-friendly experience for purchasing electronics on credit, covering various categories like phones, iPads, MacBooks, watches, and gaming consoles.

## User Preferences
Preferred communication style: Simple, everyday language.
Design Theme: High-tech cyberpunk aesthetic with cyan/electric blue (cyan-400/500) accents and dark (neutral-900) backgrounds.
Font: Inter font used consistently throughout the entire platform for both headings and body text.
UI Style: Rounded corners (0.75rem) for all containers and components with proper spacing between content and borders.
Animation Style: Continuous animations in hero section for engaging user experience.
Particles: User requires floating particles visible across entire interface like tech websites for modern appearance.

## System Architecture
The application uses a monorepo structure with shared types between the frontend and backend.

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Radix UI components with shadcn/ui
- **Styling**: Tailwind CSS with custom CSS variables
- **State Management**: TanStack Query (React Query)
- **Routing**: Wouter
- **Form Handling**: React Hook Form with Zod validation
- **UI/UX Decisions**: Consistent rounded corners (0.75rem), balanced spacing, Samsung-inspired minimalist design, and animated elements.

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **API Design**: RESTful API with JSON responses
- **Storage**: PostgreSQL database via Drizzle ORM (persistent quote storage).
- **Session Management**: In-memory (development), planned PostgreSQL sessions.
- **Rate Limiting**: 30-minute quote request rate limiting (2 requests per user) based on contact number.

### Core Features
- **Product Catalog**: Organized into categories (e.g., iPhones, Samsung, Used, iPads, MacBooks, Buds, Watches, Tablets, Gaming & Sound) with structured product data and dynamic pricing.
- **Credit Calculator**: Calculates monthly payments based on a 16.8% annual interest rate and selected terms (12, 24, 36 months). Formula: `Total = (Price - Deposit) * (1 + 0.168)`, then divided by payment term.
- **Quote Request System**: Comprehensive form with client-side and server-side Zod validation, storing detailed customer and product specifications. Supports multi-item cart quotes.

## External Dependencies

### Database and ORM
- **PostgreSQL**: Production database hosted on Neon serverless platform.
- **Drizzle ORM**: Type-safe database operations.

### UI and Styling
- **Radix UI**: Accessible component primitives.
- **Tailwind CSS**: Utility-first styling.
- **Lucide Icons**: Consistent iconography.

### Development Tools
- **Vite**: Fast development and optimized builds.
- **esbuild**: Bundling for the Node.js server.