# 🚀 Quick Start Guide

## Installation & Running (2 minutes)

### Step 1: Install Dependencies
```powershell
cd c:\Projects\Urban-frontend
npm install
```

### Step 2: Start Development Server
```powershell
npm start
```

### Step 3: Open in Browser
Navigate to: **`http://localhost:4200`**

You should see the full Urban Company homepage with:
- ✅ Sticky header with city selector & search
- ✅ Hero section with CTAs
- ✅ 6 service category cards
- ✅ Horizontally scrollable popular services
- ✅ 4-step "How it Works" section
- ✅ Trust badges section
- ✅ Footer with links

---

## Key Files to Know

### Main Files
| File | Purpose |
|------|---------|
| `src/main.ts` | Bootstrap entry point |
| `src/app/app.component.ts` | Root component |
| `src/styles.scss` | Global styles & theme |

### Layout Files
| File | Purpose |
|------|---------|
| `src/app/core/layout/shell.component.ts` | Main layout (header + content + footer) |
| `src/app/core/layout/header.component.ts` | Sticky header navigation |
| `src/app/core/layout/footer.component.ts` | Footer with links |

### Homepage Files
| File | Purpose |
|------|---------|
| `src/app/features/home/home.component.ts` | Main homepage container |
| `src/app/features/home/home-hero.component.ts` | Hero section |
| `src/app/features/home/home-categories.component.ts` | Service categories grid |
| `src/app/features/home/home-popular-services.component.ts` | Popular services carousel |
| `src/app/features/home/home-how-it-works.component.ts` | 4-step process |
| `src/app/features/home/home-testimonials.component.ts` | Trust section |

### Data Files
| File | Purpose |
|------|---------|
| `src/app/core/services/home-data.service.ts` | Mock data provider |
| `src/app/shared/models/service.model.ts` | TypeScript interfaces |

### Shared UI Components
| File | Purpose |
|------|---------|
| `src/app/shared/components/service-category-card.component.ts` | Category card |
| `src/app/shared/components/service-card.component.ts` | Service item card |

---

## Making Your First Changes

### Change Colors
Edit `src/styles.scss` - look for CSS variables at the top:
```scss
:root {
  --primary-color: #ff7800;  // Change this to your brand color
  --text-color: #202124;
  // ... other colors
}
```

### Change Mock Data
Edit `src/app/core/services/home-data.service.ts`:
```typescript
private categories: ServiceCategory[] = [
  {
    id: 1,
    name: 'Cleaning',  // Change this
    description: 'Professional home & office cleaning',  // And this
    icon: '🧹',  // And this
  },
  // ... add more
];
```

### Add a New Component
```powershell
ng generate component shared/components/my-button --standalone
```

### Add a New Page
1. Create component: `ng generate component features/about --standalone`
2. Add to routes in `src/app/app.routes.ts`
3. Import component in the route

---

## Development Commands

```powershell
# Start dev server (already running above)
npm start

# Build for production
npm run build

# Run unit tests
npm test

# Check for linting errors
npm run lint

# Build with watch mode
npm run watch
```

---

## File Structure Overview

```
src/
├── app/
│   ├── core/                           # Core services & layout
│   │   ├── layout/                     # Header, footer, shell
│   │   └── services/                   # HomeDataService
│   ├── features/                       # Feature modules
│   │   └── home/                       # Homepage feature
│   ├── shared/                         # Reusable components & models
│   │   ├── components/                 # UI components
│   │   └── models/                     # TypeScript interfaces
│   ├── app.component.ts                # Root component
│   ├── app.routes.ts                   # Route configuration
│   └── app.config.ts                   # App setup
├── main.ts                             # Bootstrap
├── styles.scss                         # Global styles
└── index.html                          # HTML template
```

---

## Common Tasks

### Want to change the homepage heading?
→ Edit `src/app/features/home/home-hero.component.ts` line ~14

### Want to add more service categories?
→ Edit `src/app/core/services/home-data.service.ts` - add to `categories` array

### Want to style a component differently?
→ Each component has its own SCSS in the `styles: []` array. Modify there.

### Want to add a new page?
→ Create component in `features/`, add to `app.routes.ts`

### Want to change the header background color?
→ Edit the `.header` style in `src/app/core/layout/header.component.ts`

---

## Component Communication Flow

```
AppComponent (root)
  └─ ShellComponent (layout)
      ├─ HeaderComponent
      ├─ RouterOutlet
      │   └─ HomeComponent
      │       ├─ HomeHeroComponent
      │       ├─ HomeCategoriesComponent
      │       │   └─ ServiceCategoryCardComponent (repeated)
      │       ├─ HomePopularServicesComponent
      │       │   └─ ServiceCardComponent (repeated)
      │       ├─ HomeHowItWorksComponent
      │       └─ HomeTestimonialsComponent
      └─ FooterComponent
```

All components use **dependency injection** for services.

---

## Styling System

### Colors (CSS Variables)
- `--primary-color`: Orange (#ff7800)
- `--text-color`: Dark gray (#202124)
- `--text-secondary`: Medium gray (#5f6368)
- `--background-color`: White (#ffffff)
- `--border-color`: Light gray (#e0e0e0)

### Spacing Scale
- `--spacing-sm`: 0.5rem
- `--spacing-md`: 1rem
- `--spacing-lg`: 1.5rem
- `--spacing-xl`: 2rem

### Responsive
- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 769px

---

## Production Build

```powershell
npm run build
```

Output: `dist/urban-company-web/`

Deploy the `dist` folder to your web server.

---

## Troubleshooting

### Port 4200 already in use?
```powershell
ng serve --port 4201
```

### Module not found error?
```powershell
npm install
```

### TypeScript errors?
Check `src/tsconfig.json` - it's in strict mode by design.

### Styles not showing?
Make sure you're importing components in the right parent.

---

## Next Steps

1. ✅ Run the app (`npm start`)
2. ✅ Explore the code in VS Code
3. ✅ Make a small style change
4. ✅ Change some mock data
5. ✅ Add a new component
6. ✅ Integrate with backend API when ready

---

## Important Notes

- **All components are standalone** - no NgModules
- **TypeScript strict mode enabled** - no `any` types
- **Mobile-first design** - works great on phones first
- **No external UI libs** - pure CSS, Flexbox/Grid
- **Production-ready** - proper structure, no TODOs

---

## Need Help?

- Check `PROJECT_SUMMARY.md` for detailed feature list
- Check `FILE_STRUCTURE.md` for all files and what they do
- Check `SETUP.md` for Angular CLI commands
- Check Angular docs: https://angular.io/docs

---

**You're all set! Start with `npm install && npm start` 🎉**
