# ASU Portfolio

A modern, cinematic portfolio website built with Next.js, featuring a black-and-white vintage aesthetic with warm gold accents.

## 📁 Project Structure

```
ASU Portfolio/
├── components/              # React components organized by purpose
│   ├── sections/           # Main page sections
│   │   ├── About.js
│   │   ├── Certifications.js
│   │   ├── Contact.js
│   │   ├── Experience.js
│   │   ├── Hero.js
│   │   ├── Projects.js
│   │   └── Skills.js
│   ├── polaroids/          # Polaroid gallery components
│   │   ├── AlternatingPolaroidSection.js
│   │   ├── FilmGrain.js
│   │   ├── Lightbox.js
│   │   └── PolaroidStack.js
│   ├── layout/             # Layout and navigation components
│   │   ├── AppLayout.js
│   │   ├── Footer.js
│   │   ├── Navigation.js
│   │   └── ThemeProvider.js
│   ├── common/             # Shared/reusable components
│   │   ├── SectionHeader.js
│   │   └── StoryModeHint.js
│   └── ui/                 # UI component library (shadcn/ui)
│       ├── badge.js
│       ├── button.js
│       ├── dialog.js
│       ├── input.js
│       └── textarea.js
├── pages/                  # Next.js pages
│   ├── _app.js            # App wrapper
│   ├── 404.js             # 404 error page
│   ├── AboutMe.js         # About page with cinematic sections
│   ├── index.js           # Home page (redirects to Portfolio)
│   └── Portfolio.js       # Main portfolio page
├── public/                 # Static assets
│   ├── Data/              # JSON data files
│   │   ├── certifications.json
│   │   ├── Experience.json
│   │   └── projects.json
│   ├── bg/                # Background images
│   ├── desk-build/        # Polaroid images for "The Desk & The Build"
│   ├── logos/             # Company/project logos
│   ├── new-streets/       # Polaroid images for "New Streets"
│   ├── photos/            # General photos
│   ├── Projects/          # Project images
│   └── small-joys/        # Polaroid images for "Small Joys"
├── hooks/                 # Custom React hooks
│   └── useDataFetch.js    # Hook for fetching JSON data
├── styles/                # Global styles
│   └── globals.css
├── utils/                 # Utility functions
│   └── scroll.js          # Scroll utilities (throttle)

```

## 🎨 Design System

### Color Palette
- **Background**: `#0A0A0A` (Deep black)
- **Text**: `#F4F2EE` (Off-white)
- **Accent**: `#E9C46A` (Warm gold)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: System fonts with Playfair Display for emphasis
- **Monospace**: For technical/metadata text

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## 📝 Key Features

### Cinematic About Page
- **Scene-based storytelling**: Multiple sections with cinematic transitions
- **Polaroid galleries**: Interactive stacks with navigation arrows
- **Film grain overlay**: Subtle vintage texture
- **Smooth animations**: Framer Motion for transitions

### Polaroid Component System
- **PolaroidStack**: Displays stacked polaroid images with peeking edges
- **AlternatingPolaroidSection**: Three-row layout with alternating image/text placement
- **Lightbox**: Full-screen gallery viewer (optional)
- **FilmGrain**: Subtle texture overlay

### Theme System
- Dark theme with light theme support
- ASU color scheme (gold/maroon accents)
- ThemeProvider for context-based theming

## 🛠️ Technologies

- **Next.js 14** - React framework
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **EmailJS** - Contact form handling

## 📦 Component Organization

### Sections (`components/sections/`)
Main content sections used across the portfolio:
- `Hero.js` - Landing section
- `About.js` - About section
- `Experience.js` - Work experience timeline
- `Projects.js` - Project showcase
- `Skills.js` - Skills and technologies
- `Certifications.js` - Certifications display
- `Contact.js` - Contact form

### Polaroids (`components/polaroids/`)
Specialized components for the cinematic About page:
- `AlternatingPolaroidSection.js` - Main section component
- `PolaroidStack.js` - Individual polaroid stack with navigation
- `Lightbox.js` - Full-screen gallery viewer
- `FilmGrain.js` - Texture overlay

### Layout (`components/layout/`)
Site-wide layout components:
- `Navigation.js` - Header navigation
- `Footer.js` - Site footer
- `ThemeProvider.js` - Theme context provider

### Common (`components/common/`)
Reusable components:
- `SectionHeader.js` - Standardized section headers

## 🔧 Configuration

### Theme Configuration
Edit `components/layout/ThemeProvider.js` to modify theme settings.

### Data Sources
JSON data files in `public/Data/` can be edited to update content:
- `Experience.json` - Work experience
- `projects.json` - Projects showcase
- `certifications.json` - Certifications

## 📄 License

This project is private and proprietary.

## 👤 Author

Het Bhesaniya - ASU Portfolio  
Live portfolio: [https://hetbhesaniya.vercel.app](https://hetbhesaniya.vercel.app)

