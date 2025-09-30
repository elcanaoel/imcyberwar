# cyberwar Portfolio

A modern, responsive portfolio website built with React, TypeScript, and SASS.

## Features

- ⚡ **React 18** with TypeScript
- 🎨 **SASS** for styling with modern CSS features
- 🌧️ **Rain and Thunder Animation** - Atmospheric background effects
- 📱 **Responsive Design** - Works on all devices
- 🎯 **2x2 Project Grid** - Clean project showcase
- 📄 **Interactive Resume** - Toggle between projects and resume
- 🚀 **Modern UI** - Dark theme with purple accents

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx           # Main hero section with navigation
│   ├── Projects.tsx       # Projects showcase component
│   ├── Resume.tsx         # Resume content component
│   └── RainAnimation.tsx  # Rain and thunder effects
├── App.tsx               # Main app component
├── App.scss             # App-specific styles
├── index.tsx            # React entry point
└── index.scss           # Global styles and animations
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **SASS** - CSS preprocessing
- **CSS Grid** - Layout system
- **CSS Animations** - Rain and thunder effects
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## Customization

### Colors
The main color scheme uses:
- Primary: `#667eea` (Purple)
- Secondary: `#764ba2` (Dark Purple)
- Background: `#000000` (Black)
- Text: `#e2e8f0` (Light Gray)

### Adding Projects
Edit `src/components/Projects.tsx` to add or modify projects.

### Modifying Resume
Edit `src/components/Resume.tsx` to update resume content.

## Deployment

This project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## License

MIT License
