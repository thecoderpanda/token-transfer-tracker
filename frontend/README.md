# ERC721 Token Transfer Tracker Frontend

A modern Next.js frontend application for tracking ERC721 token transfers using Hemera indexer.

## Features

- Real-time token transfer tracking
- Clean and responsive dashboard interface
- Token transfer history table
- Built with modern React and TypeScript
- Styled with Tailwind CSS

## Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- Styled Components
- React Query (for data fetching)

## Directory Structure

```
frontend/
├── app/              # Next.js app router pages
├── components/       # React components
├── lib/             # Utility functions and helpers
├── pages/           # Additional pages (if using pages router)
├── public/          # Static assets
├── services/        # API services and data fetching
└── styles/          # Global styles and Tailwind config
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file with the following variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
```

3. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Component Overview

### Dashboard
The main dashboard component displaying token transfer data and statistics.

### TransferTable
A responsive table component showing detailed transfer information.

### Header
Navigation and user interface header component.

## API Integration

The frontend integrates with the Hemera indexer through the services defined in `services/api.ts`. Make sure your Hemera indexer is properly configured and running.

## Customization

### Styling
- Modify `tailwind.config.ts` for theme customization
- Global styles can be found in `styles/globals.css`
- Component-specific styles use styled-components

### Adding New Features
1. Create new components in the `components` directory
2. Add new API services in the `services` directory
3. Create new pages in the `app` directory

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Guidelines

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Write clean, maintainable code
- Follow the existing styling patterns
