# 🚀 Ankith Ganesh - Personal Portfolio

[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-99%2B-success)](https://github.com/Ankith025/Personal-Portfolio/blob/main/Lighthouse%20Report%20Viewer.pdf)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.1-purple)](https://vitejs.dev/)
[![Mobile Responsive](https://img.shields.io/badge/Mobile-Responsive-green)]()

> **Sprint 01 Challenge** - Gesix Solutions GeoAI Internship  
> A bold, neo-brutalist portfolio showcasing technical expertise and creative projects

[Live Demo](https://personalportfolio-six-ebon.vercel.app/) | [Process Documentation](PROCESS.md)

---

## 📋 Table of Contents

- [Overview](##overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design Philosophy](#design-philosophy)
- [Performance](#performance)
- [Deployment](#deployment)
- [License](#license)

---

## 🎯 Overview

A **single-page application (SPA)** portfolio built for the Gesix Solutions internship Sprint 01 challenge. This portfolio breaks away from conventional designs with a **neo-brutalist aesthetic** featuring bold typography, high contrast colors, geometric elements, and smooth animations.

**Key Highlights:**
- 🎨 Unique neo-brutalist design system
- ⚡ 98+ Lighthouse performance score
- 📱 Fully responsive (mobile-first approach)
- ♿ WCAG 2.1 AA compliant
- 🚀 Optimized for speed and accessibility

---

## ✨ Features

### Core Sections

#### 🏠 Hero Section
- Dynamic name reveal with staggered animations
- Professional title: "Gesix GeoAI Intern"
- Engaging bio highlighting AI/ML and web development expertise
- Call-to-action buttons with hover effects
- Real-time statistics cards

#### 🛠️ Tech Stack Visualization
**Proficient Skills** (Can code without documentation):
- Python (Advanced)
- JavaScript (Advanced)
- React (Intermediate)
- HTML/CSS (Advanced)
- Java (Intermediate)
- Git/GitHub (Advanced)

**Familiar Skills** (Working knowledge):
- C++ (DSA Focused)
- Node.js (Backend Basics)
- MySQL (Database Design)
- Machine Learning (TensorFlow/Scikit-learn)

#### 💼 Project Showcase
Each project card includes:
- **Title & Type**: Clear categorization
- **Status Badge**: Live / Completed / In Development
- **Problem-Focused Description**: What problem does it solve?
- **Tech Stack Tags**: Technologies used
- **GitHub Link**: Direct repository access

**Featured Projects:**
1. **AI Enhanced Micro ECG** - ML-powered cardiac analysis system
2. **Movie Recommendation Engine** - Genre-based filtering with intuitive UI
3. **Personal Portfolio** - This website (meta!)

#### 📜 Certifications
- Operating System Basics (Cisco Networking Academy)
- AI Primer Certification (Infosys Springboard)

#### 📬 Contact Section
- Email: ankithganesh23@gmail.com
- LinkedIn: [ankith-ganesh](https://linkedin.com/in/ankith-ganesh)
- GitHub: [Ankith025](https://github.com/Ankith025)
- Location: Bangalore, India

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18.3.1
- **Build Tool:** Vite 6.0.1
- **Language:** JavaScript (ES6+)
- **Styling:** CSS3 (Custom Properties, Grid, Flexbox)
- **Fonts:** Archivo Black, IBM Plex Mono (Google Fonts)

### Development Tools
- **Version Control:** Git/GitHub
- **Package Manager:** npm
- **Code Editor:** VS Code
- **Browser Testing:** Chrome DevTools, Firefox DevTools

### Deployment
- **Platform:** Vercel / Netlify / GitHub Pages
- **CI/CD:** Automatic deployments from main branch
- **SSL:** Automatic HTTPS

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Ankith025/Personal-Portfolio.git
cd Personal-Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open browser**
```
http://localhost:5173
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
portfolio/
│
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
│
├── src/
│   ├── components/        # React components (future)
│   ├── assets/            # Images, icons (future)
│   ├── styles/            # Additional CSS modules (future)
│   ├── App.jsx            # Main application component
│   ├── App.css            # Core styling & animations
│   └── main.jsx           # React entry point
│
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies & scripts
├── PROCESS.md             # Development documentation
└── README.md              # This file
```

---

## 🎨 Design Philosophy

### Neo-Brutalism Aesthetic

**Core Principles:**
1. **Bold Typography**: Archivo Black for impact, IBM Plex Mono for code
2. **High Contrast**: Pure blacks (#000), bright whites (#FFF), electric accents
3. **Geometric Shapes**: Sharp edges, no rounded corners, rectangular grids
4. **Dramatic Shadows**: 8px offset shadows for depth
5. **Raw Honesty**: No gradients, no blur, what you see is what you get

**Color Palette:**
- Primary: `#FF3366` (Electric Pink)
- Secondary: `#FFD700` (Gold)
- Accent: `#00FF88` (Neon Green)
- Dark: `#0A0A0A` (Near Black)
- Light: `#FFFFFF` (Pure White)

### Animation Strategy
- **Entrance Animations**: Staggered fade-in with slide effects
- **Hover Interactions**: Transform shifts, color changes
- **Performance**: GPU-accelerated, 60fps maintained
- **Accessibility**: Respects `prefers-reduced-motion`

---

## ⚡ Performance

### Lighthouse Scores

| Metric | Score | Target |
|--------|-------|--------|
| Performance | 98 | 90+ |
| Accessibility | 100 | 90+ |
| Best Practices | 100 | 90+ |
| SEO | 100 | 90+ |

### Optimization Techniques

1. **Critical CSS Inline**: First paint optimized
2. **Font Loading**: Preconnect + font-display swap
3. **Image Optimization**: SVG icons, lazy loading ready
4. **Code Splitting**: Vite automatic chunking
5. **Minification**: Production build compression
6. **Caching**: Service worker ready (future)

### Load Times
- **FCP (First Contentful Paint)**: < 1.2s
- **LCP (Largest Contentful Paint)**: < 2.5s
- **TTI (Time to Interactive)**: < 3.0s
- **CLS (Cumulative Layout Shift)**: < 0.1

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1920px+

### Mobile Optimizations
- Touch-friendly button sizes (min 44x44px)
- Simplified navigation (logo-only on small screens)
- Stacked layouts (grid → single column)
- Readable font sizes (min 16px body)
- No horizontal scroll

### Testing Matrix
- ✅ iPhone SE (375x667)
- ✅ iPhone 12 (390x844)
- ✅ iPad (768x1024)
- ✅ Desktop 1080p (1920x1080)
- ✅ Desktop 4K (3840x2160)

---

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial portfolio deployment"
git push origin main
```

2. **Import to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import GitHub repository
- Framework: Vite (auto-detected)
- Click "Deploy"

3. **Custom Domain** (Optional)
- Add domain in Vercel settings
- Update DNS records
- Automatic SSL provisioning

### Alternative: Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### Alternative: GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"scripts": {
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] All links work (GitHub, LinkedIn, Email)
- [ ] No console errors or warnings
- [ ] Smooth animations (no janking)
- [ ] Readable on all screen sizes
- [ ] Keyboard navigation works
- [ ] Screen reader compatible

### Automated Testing
```bash
# Run Lighthouse (Chrome DevTools)
# Performance, Accessibility, SEO, Best Practices

# Check bundle size
npm run build -- --mode analyze
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

**Built For:**  
Gesix Solutions - GeoAI Internship Program (Sprint 01)

**Technologies:**  
- [React](https://reactjs.org/) - UI Framework
- [Vite](https://vitejs.dev/) - Build Tool
- [Google Fonts](https://fonts.google.com/) - Typography

**Resources:**  
- [MDN Web Docs](https://developer.mozilla.org/) - Web Standards
- [Web.dev](https://web.dev/) - Performance Best Practices
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility

---

## 📞 Contact

**Ankith Ganesh**  
CS Engineering Student | Gesix GeoAI Intern

- 📧 Email: ankithganesh23@gmail.com
- 💼 LinkedIn: [ankith-ganesh](https://linkedin.com/in/ankith-ganesh)
- 🐙 GitHub: [Ankith025](https://github.com/Ankith025)
- 📍 Location: Bangalore, India

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ and ⚡ by Ankith Ganesh

</div>
