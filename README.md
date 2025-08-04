# Credit Card Management App

A modern, responsive credit card management application built with React, TypeScript, and Redux Toolkit. This application provides a comprehensive solution for managing credit cards, viewing transactions, and handling card operations with a mobile-first design approach.

## 🚀 Live Demo

**Deployment Link:** [https://credit-card-management-app.vercel.app/](https://credit-card-management-app.vercel.app/)

## 📋 Project Overview

The Credit Card Management App is a feature-rich web application that allows users to:

- **Card Management**: View, add, and manage multiple credit cards
- **Card Operations**: Freeze/unfreeze cards with visual feedback
- **Transaction Tracking**: View recent transactions with detailed information
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Touch Support**: Swipe gestures for card navigation on mobile
- **State Management**: Persistent data storage using localStorage
- **Loading States**: Skeleton loaders for better user experience

### Key Features

- 🎴 **Interactive Card Carousel**: Swipe through multiple cards with smooth animations
- 🔒 **Card Security**: Freeze/unfreeze functionality with visual indicators
- 📱 **Mobile Optimized**: Touch gestures and responsive layout
- 💾 **Data Persistence**: Cards and freeze states saved to localStorage
- 🎨 **Modern UI**: Clean design with consistent styling
- ⚡ **Performance**: Optimized with memoization and efficient state management

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Language**: TypeScript 5.8.3
- **State Management**: Redux Toolkit with RTK Query
- **Routing**: React Router DOM 7.7.1
- **Build Tool**: Vite 7.0.4
- **Deployment**: Vercel
- **Styling**: CSS3 with responsive design

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**: Version 16.0 or higher
- **npm**: Version 7.0 or higher (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Anukesh/credit-card-management-app.git
   cd credit-card-management-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── AddCardForm/     # Form component for adding new cards
│   ├── Cards/           # Card-related components
│   │   ├── CreditCards.tsx
│   │   ├── CreditCardsSkeleton.tsx
│   │   └── ButtonsContainer.tsx
│   ├── Dropdown/        # Dropdown component
│   ├── Layout/          # Main layout wrapper
│   ├── Modal/           # Modal component
│   ├── Navigation/      # Navigation sidebar
│   └── RecentTransactions/ # Transaction display component
├── pages/               # Page components
│   ├── Cards/           # Main cards page
│   ├── Credit/          # Credit page
│   ├── Home/            # Home page
│   ├── Payments/        # Payments page
│   └── Settings/        # Settings page
├── store/               # Redux store configuration
│   ├── store.ts         # Main store setup
│   ├── creditCardSlice.ts # Card management state
│   ├── frozenCardsSlice.ts # Freeze functionality state
│   └── cardsApi.ts      # RTK Query API slice
├── types/               # TypeScript type definitions
│   └── card.ts          # Card and transaction types
├── utils/               # Utility functions
│   └── cardUtils.ts     # Card-related helper functions
├── hooks/               # Custom React hooks
│   └── redux.ts         # Typed Redux hooks
├── assets/              # Static assets (images, icons)
├── config/              # Configuration files
├── App.tsx              # Main App component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## 🎯 Core Features

### Card Management

- **Add New Cards**: Modal-based form to add credit cards
- **Card Display**: Carousel view with smooth transitions
- **Card Information**: Display cardholder name, masked/unmasked card numbers
- **Card Types**: Support for different card types (VISA, etc.)

### Security Features

- **Card Freezing**: Freeze/unfreeze cards with visual feedback
- **Number Masking**: Toggle card number visibility
- **Persistent State**: Freeze status saved across sessions

### User Experience

- **Touch Support**: Swipe gestures for mobile navigation
- **Loading States**: Skeleton loaders during data fetching
- **Responsive Design**: Optimized for all screen sizes
- **Smooth Animations**: CSS transitions for better UX

### Data Management

- **Redux Toolkit**: Centralized state management
- **RTK Query**: Efficient data fetching and caching
- **LocalStorage**: Persistent storage for user data
- **TypeScript**: Type-safe development

## 📱 Mobile Features

The application is fully optimized for mobile devices with:

- **Touch Gestures**: Swipe left/right to navigate cards
- **Responsive Layout**: Adaptive design for different screen sizes
- **Mobile Navigation**: Touch-friendly interface elements
- **Optimized Scrolling**: Smooth scrolling with proper touch handling

## 🔧 Configuration

### Environment Setup

The application uses Vite for development and build processes. Configuration can be found in:

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules

### Deployment

The application is deployed on Vercel with the following configuration:

- `vercel.json` - Vercel deployment settings
- Automatic deployments from the main branch
- SPA routing support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Anukesh Bhawsar**

- GitHub: [@Anukesh](https://github.com/Anukesh)
- Project Repository: [credit-card-management-app](https://github.com/Anukesh/credit-card-management-app)

## 🚀 Future Enhancements

- Payment integration
- Transaction filtering and search
- Card analytics and insights
- Push notifications for transactions
- Multi-language support
- Dark mode theme

---

For any questions or support, please open an issue on the GitHub repository.
