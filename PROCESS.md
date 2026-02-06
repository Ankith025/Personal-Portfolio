# PROCESS DOCUMENTATION

## Sprint 01: Personal Portfolio Development

**Developer:** Ankith Ganesh  
**Role:** Gesix GeoAI Intern  
**Timeline:** Feb 2nd - Feb 6th, 2026  
**Tech Stack:** React.js (Vite), HTML5, CSS3  

---

## 1. ARCHITECTURE DECISIONS

### Folder Structure

```
portfolio/
├── src/
│   ├── components/     # Future component modules (scalable)
│   ├── assets/         # Static resources (images, icons)
│   ├── styles/         # Additional CSS modules
│   ├── App.jsx         # Main application component
│   ├── App.css         # Core styling
│   └── main.jsx        # React entry point
├── public/             # Public static assets
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies
├── PROCESS.md          # This file
└── README.md           # Project documentation
```

### Why This Structure?

**1. Single Page Application (SPA) Architecture**
- Chose a component-based approach for modularity
- All content in `App.jsx` for initial sprint (single responsibility)
- Separated concerns: App.jsx (logic) + App.css (presentation)

**2. Vite as Build Tool**
- Faster development server than Create React App
- Superior hot module replacement (HMR)
- Optimized production builds with code splitting
- Better Lighthouse performance scores out of the box

**3. Component Organization**
- `components/` folder prepared for future scalability
- Each section can be extracted into reusable components
- Follows atomic design principles for future refactoring

**4. Asset Management**
- `assets/` for images, fonts, icons
- Vite handles asset optimization automatically
- Public folder for static files that shouldn't be processed

---

## 2. AI USAGE & PROMPT ENGINEERING

### AI Tools Used
- **Primary:** Claude AI, Gemini
- **Purpose:** Code generation, design consultation, debugging assistance

### Effective Prompts Used

#### CSS Animation Optimization
```
Prompt: "Create staggered entrance animations for portfolio sections 
using CSS-only solutions. Each element should fade in with slide 
effect at different delays. Optimize for performance."

Result: Implemented animation-delay based sequencing without JavaScript,
achieving 60fps animations
```

### AI Collaboration Strategy

**What I Asked AI For:**
- Initial design direction and aesthetic choices
- CSS animation patterns and best practices
- Performance optimization techniques
- Responsive design breakpoint strategies

**What I Implemented Myself:**
- Personal content (bio, projects, skills)
- Project descriptions and technical details
- Custom color palette adjustments
- Testing and quality assurance

---

## 3. CHALLENGES & SOLUTIONS

### Challenge: Mobile Navigation Overflow

**Problem:**
Navigation links were overflowing on small screens (< 375px), causing 
horizontal scroll and breaking mobile UX.

**Root Cause:**
- Fixed gap spacing between nav items
- No overflow handling for small viewports
- Font sizes not scaled properly

**Solution:**
```css
@media (max-width: 768px) {
  .nav-links {
    display: none; 
  }
}
```

## 9. ACKNOWLEDGMENTS

**Tools Used:**
- React + Vite
- Google Fonts (Archivo Black, IBM Plex Mono)
- Chrome DevTools
- VS Code
- Git/GitHub

**Resources Referenced:**
- MDN Web Docs (CSS animations, accessibility)
- React documentation
- Vite documentation
- Web.dev (performance best practices)
- WCAG 2.1 Guidelines

**AI Assistance:**
- Claude (Anthropic) for code generation and optimization

---

**Process Document Version:** 1.0  
**Last Updated:** February 6th, 2026  
**Maintained By:** Ankith Ganesh  
**Contact:** ankithganesh23@gmail.com
