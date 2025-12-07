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
  - CRITICAL FIX: Completely rewrote quote submission logic to properly handle cart items with correct quantities and pricing
  - Fixed FormCarry data structure to send individual phone entries with quantity 1 and correct individual prices
  - Resolved issue where cart items with multiple quantities were being processed incorrectly in quote requests
- July 10, 2025. Complete dashboard animation implementation
  - Added comprehensive slide-in animations for header, navigation, and all major sections
  - Implemented staggered entrance animations with proper delay timing for visual flow
  - Enhanced interactive elements with hover animations (scale, translate, color transitions)
  - Added continuous pulse animations to key elements (payment terms, requirement bullets)
  - Improved user experience with smooth transitions and engaging visual feedback
  - Maintained Samsung-inspired design while adding modern animation effects
- July 17, 2025. Platform expansion with new device categories
  - Added comprehensive sections for iPads, MacBooks, buds, watches, and Samsung tablets
  - Created dedicated product pages for each category with animated layouts
  - Extended product data structure to include Device interface with optional storage and specs
  - Added 200+ new products across all categories with realistic pricing and specifications
  - Implemented consistent cart functionality across all device types
  - Enhanced dashboard with 6-category grid layout and animated device selection cards
  - Maintained existing quote form integration for all new device categories
  - Updated all device categories with correct pricing and specifications as provided by user:
    * iPads: 7 models ranging from N$6,999 to N$26,999
    * MacBooks: 7 models ranging from N$12,999 to N$54,999
    * Buds: 5 models ranging from N$1,199 to N$5,499
    * Samsung Tablets: 5 models ranging from N$2,999 to N$24,999
    * Watches: 9 models ranging from N$4,999 to N$18,999
  - Updated all device categories with correct color options:
    * iPads: Blue, Purple, Starlight, Space Gray for Air models; Silver, Blue, Pink, Yellow for iPad 10; Silver, Space Gray for iPad 11; Silver, Space Black for iPad Pro M4
    * MacBooks: Silver for 14-inch 512GB; Space Black for 1TB and Pro models; Silver, Space Gray, Gold for M1 Air; Midnight, Starlight, Silver, Space Gray for M2 and M4 Air
    * Buds: Graphite, Silver for Samsung Buds 3 Pro; Graphite, White for Buds FE; White for all AirPods models
    * Samsung Tablets: Graphite, Beige for Ultra and S9; Mint, Lavender, Gray, Silver for S10 FE; Graphite, Silver for Tab A9
    * Watches: Titanium Gray for Samsung Ultra; Green, Silver, Graphite for Watch 7 44mm; Green, Cream, Graphite, Silver for Watch 7 40mm; Midnight, Silver, Starlight for Apple Watch SE; Midnight, Silver, Blue, Starlight for Series 10; Natural Titanium for Apple Watch Ultra
- July 17, 2025. Enhanced navigation system with complete device category access
  - Added all device categories to main navigation menu (Phones, iPads, MacBooks, Buds, Watches, Tablets)
  - Updated both desktop and mobile navigation menus with direct access to all product categories
  - Fixed color selection functionality across all device quote forms by properly passing device colors to quote modal
  - Improved navigation spacing and layout to accommodate additional menu items
  - Enhanced user experience with direct access to all device categories from header navigation
- July 19, 2025. Implemented 30-minute quote request rate limiting with 2 requests per user
  - Added backend rate limiting logic to track quote requests by contact number
  - Users can now submit maximum 2 quote requests every 30 minutes
  - Enhanced error handling to display user-friendly rate limit messages
  - Improved backend storage interface to support querying recent quotes by user
  - Updated frontend error handling to specifically handle 429 rate limit responses
  - System tracks request timestamps and calculates remaining wait time for users
- January 10, 2025. Added Gaming & Sound collection with 16 new products
  - Created new "Gaming & Sound" category featuring PlayStation 5 consoles, accessories, and premium audio equipment
  - Added 16 products: PS5 consoles (Digital, Slim Disc, Pro), PS5 accessories (DualSense controllers, charging station, Portal, headsets, earbuds)
  - Included JBL products: Flip 7, Charge 5, Clip 5, Tune 520BT, Tune 670NC, Live 670NC speakers and headphones
  - Added Harman Kardon Onyx Studio 9 premium speakers
  - Products range from N$599 to N$17,999
  - Created dedicated gaming-sound.tsx page with full cart and quote functionality
  - Added Gaming & Sound category to main dashboard with 7-category grid layout
  - Integrated routing and navigation for new category across entire platform
  - Added Gaming & Sound links to both desktop header navigation and mobile toggle menu
- November 23, 2025. Expanded iPhone 17 series product offerings
  - Added iPhone 17 Pro Max 512GB at N$34,999 with Cosmic Orange, Deep Blue, and Silver color options
  - Added iPhone 17 Pro 512GB at N$32,999 with Cosmic Orange, Deep Blue, and Silver color options
  - Enhanced premium tier offerings for customers seeking higher storage capacity models
- December 07, 2025. Moved older phones to Used category
  - Moved iPhones to Used: iPhone 11 Pro Max 256GB, iPhone 11 Pro 256GB, iPhone 11 128GB, iPhone XS Max 256GB, iPhone XR 256GB, iPhone X 256GB, iPhone X 64GB
  - Moved Samsung phones to Used: Samsung S23 Ultra, S23 Plus, S23 (512GB & 256GB), S22 Ultra (512GB & 256GB), S22 Plus, S22, S21 Ultra, S21 (256GB & 128GB), S20 Ultra, S20 (256GB & 128GB)
  - All moved phones now display with "Used" prefix and USED condition in the Used Phones category
  - Prices maintained from original new phone pricing

## User Preferences

Preferred communication style: Simple, everyday language.
Design Theme: Samsung-inspired black and white theme with Samsung font throughout platform.
UI Style: Rounded corners (0.75rem) for all containers and components with proper spacing between content and borders.
Animation Style: Continuous animations in hero section for engaging user experience.
Particles: User requires floating particles visible across entire interface like tech websites for modern appearance.