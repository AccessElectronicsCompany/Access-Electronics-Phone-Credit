# Access Electronics Phone Credit Platform

## Overview

This is a full-stack web application built for Access Electronics, allowing customers to request quotes for purchasing phones on credit. The platform features a React frontend with TypeScript, an Express.js backend, and uses PostgreSQL with Drizzle ORM for data persistence. The application implements a credit calculation system with a 16.8% interest rate and flexible payment terms of 12, 24, or 36 months.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: In-memory storage (development) with planned PostgreSQL sessions
- **API Design**: RESTful API with JSON responses

### Build and Development
- **Monorepo Structure**: Shared types and schemas between client and server
- **Development**: Hot module reloading with Vite
- **Production Build**: Bundled server with esbuild, client with Vite
- **TypeScript**: Strict configuration with path mapping

## Key Components

### Phone Catalog System
- **Product Categories**: Three main sections (iPhones, Samsung, Used phones)
- **Phone Data**: Structured product information with pricing, storage, colors, and conditions
- **Dynamic Pricing**: Real-time price display with credit calculation integration

### Credit Calculator
- **Interest Rate**: Fixed 16.8% annual rate
- **Payment Terms**: 12, 24, or 36-month options
- **Calculation Logic**: `Total = (Price - Deposit) * (1 + 0.168)`, then divided by payment term
- **Real-time Updates**: Instant recalculation when parameters change

### Quote Request System
- **Form Validation**: Comprehensive validation using Zod schemas
- **Required Fields**: Full customer information including contact details, address, and product specifications
- **Data Persistence**: Structured storage of quote requests with timestamps
- **Error Handling**: User-friendly error messages and validation feedback

## Data Flow

1. **Product Selection**: Customer browses phone categories and selects desired model
2. **Quote Calculation**: System calculates monthly payments based on selected phone price and payment terms
3. **Form Submission**: Customer completes comprehensive quote request form
4. **Data Validation**: Both client-side and server-side validation using shared Zod schemas
5. **Storage**: Quote request stored in PostgreSQL database via Drizzle ORM
6. **Response**: Confirmation provided to customer with request details

## External Dependencies

### Database and ORM
- **PostgreSQL**: Production database hosted on Neon serverless platform
- **Drizzle ORM**: Type-safe database operations with schema-first approach
- **Connection**: Environment-based DATABASE_URL configuration

### UI and Styling
- **Radix UI**: Accessible component primitives for complex UI interactions
- **Tailwind CSS**: Utility-first styling with custom design system
- **Lucide Icons**: Consistent iconography throughout the application

### Development Tools
- **Replit Integration**: Development environment optimizations and error overlays
- **Hot Reloading**: Development server with instant updates
- **Type Safety**: End-to-end TypeScript for development confidence

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express API proxy
- **Database**: Neon PostgreSQL with connection pooling
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
- **Client**: Static build optimized for CDN delivery
- **Server**: Bundled Node.js application with embedded static assets
- **Database**: Production PostgreSQL with migration support via Drizzle

### Build Process
1. **Client Build**: Vite builds optimized React application
2. **Server Build**: esbuild bundles Express server with dependencies
3. **Static Assets**: Client build output served by Express in production
4. **Database Migrations**: Drizzle handles schema migrations

## Changelog

- July 06, 2025. Initial setup
- July 09, 2025. Complete Samsung-inspired black and white theme redesign
  - Implemented Samsung font (Open Sans) throughout entire platform
  - Created Samsung utility classes for consistent styling
  - Updated all components with black and white color scheme
  - Redesigned phone selection flow with collections navigation
  - Enhanced user experience with Samsung-like minimalist design
- July 09, 2025. Major UI/UX improvements and performance optimizations
  - Implemented rounded corners (border-radius: 0.75rem) throughout entire platform
  - Enhanced quote form modal with sectioned layout, improved field styling, and better user experience
  - Improved spacing between content and borders across all components
  - Moved "ACCESS ELECTRONICS" logo positioning 4px to the right
  - Optimized loading speed by removing unused font imports and improving CSS
  - Enhanced phone cards and calculator modal with consistent rounded corner styling
  - Updated footer with rounded corner containers for branch information
  - Improved form field styling with better borders, placeholders, and hover states
  - Added performance optimizations for faster rendering and better user experience
- July 09, 2025. Final UI/UX enhancements and optimizations
  - Fixed desktop navigation to show "Terms & Conditions" in full instead of truncated "Terms"
  - Updated hero section animations to be continuous (animate-pulse, animate-bounce, animate-ping) instead of one-time
  - Redesigned payment term containers (12/24/36 months) with proper sizing and interactive selection buttons
  - Optimized quote form fields: made email, physical address, and postal address fields compact and appropriately sized
  - Confirmed credit calculation logic correctly implements: credit amount = phone price - deposit
  - Enhanced calculator modal with better styled payment term selection buttons
  - Improved overall user experience with consistent rounded corners and better field configurations
- July 10, 2025. Complete cart functionality implementation and UI fixes
  - Fixed button overlap issues on desktop by improving phone card layout with better spacing
  - Implemented React Context for cart state management to resolve empty cart issues
  - Added comprehensive cart modal with quantity controls, item removal, and total calculations
  - Enhanced quote form to properly handle multi-item cart quotes with individual prices and quantities
  - Updated FormCarry integration to send detailed cart item information (name, storage, color, quantity, price)
  - Added cart items display in quote form modal showing breakdown of all selected phones
  - Improved mobile responsiveness with adaptive button text display
  - Fixed cart persistence with localStorage integration

## User Preferences

Preferred communication style: Simple, everyday language.
Design Theme: Samsung-inspired black and white theme with Samsung font throughout platform.
UI Style: Rounded corners (0.75rem) for all containers and components with proper spacing between content and borders.
Animation Style: Continuous animations in hero section for engaging user experience.
Particles: User requires floating particles visible across entire interface like tech websites for modern appearance.