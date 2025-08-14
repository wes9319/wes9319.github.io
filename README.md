# EWVV Portfolio

A personal portfolio website built with React, TypeScript, and Vite.

## 🚀 Deployment

This project is configured for deployment on GitHub Pages.

### Automatic Deployment (Recommended)

The project uses GitHub Actions for automatic deployment. Every push to the `main` branch will trigger a build and deployment to GitHub Pages.

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## 🛠️ Development

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/wes9319/wes9319.github.io.git
   cd wes9319.github.io
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run deploy` - Deploy to GitHub Pages

## 📁 Project Structure

```
src/
├── app/
│   ├── providers/     # App providers (Router, etc.)
│   ├── router/        # Routing configuration
│   ├── store/         # State management
│   └── styles/        # Global styles
├── design/
│   ├── atoms/         # Atomic components
│   ├── molecules/     # Molecular components
│   ├── organisms/     # Organism components
│   └── templates/     # Page templates
├── pages/             # Page components
└── shared/            # Shared utilities and components
```

## 🌐 Live Site

Visit the live site at: [https://wes9319.github.io/wes9319.github.io](https://wes9319.github.io/wes9319.github.io)

## 📝 License

This project is private and proprietary.
