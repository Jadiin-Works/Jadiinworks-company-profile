# Services Theme System

This directory contains the enhanced services page components with a dedicated theme system that provides consistent dark and light mode support.

## Components

### ServiceThemeProvider
A context provider that manages theme-specific variables for the services page components.

**Features:**
- Automatic theme detection (system preference or manual)
- Consistent color palette for both light and dark modes
- CSS custom properties for easy styling
- Smooth transitions between themes

**Usage:**
```jsx
import { ServiceThemeProvider } from "./ServiceThemeProvider";

<ServiceThemeProvider>
  <YourServicesComponents />
</ServiceThemeProvider>
```

### ServiceCard
Enhanced service card component with improved theme support and animations.

**Props:**
- `emoji`: Fallback emoji icon
- `Icon`: React component for custom icon
- `title`: Service title
- `points`: Array of service features
- `index`: Animation delay index

**Features:**
- Hover effects with smooth transitions
- Theme-aware styling
- Micro-interactions
- Accessibility support

### ProcessStep
Process step component for displaying workflow steps.

**Props:**
- `number`: Step number
- `title`: Step title
- `description`: Optional step description

**Features:**
- Numbered badges with theme colors
- Hover animations
- Responsive design

### ServiceIcon
Utility component for consistent icon rendering.

**Props:**
- `emoji`: Fallback emoji
- `Icon`: React component for custom icon
- `size`: Icon size (default: "2rem")

## Styling

### CSS Classes
The services page uses dedicated CSS classes defined in `services.css`:

- `.services-page`: Main container
- `.service-card`: Service card styling
- `.process-step`: Process step styling
- `.services-background`: Background effects
- `.services-container`: Content container

### Theme Variables
The theme system provides CSS custom properties:

```css
/* Text colors */
--text-primary: #ffffff (dark) / #171717 (light)
--text-secondary: #a3a3a3 (dark) / #525252 (light)
--text-muted: #737373

/* Background colors */
--bg-primary: #1a1a1a (dark) / #ffffff (light)
--bg-card: rgba(255,255,255,0.05) (dark) / rgba(255,255,255,0.95) (light)

/* Border colors */
--border-primary: rgba(255,255,255,0.1) (dark) / rgba(0,0,0,0.08) (light)
--border-accent: rgba(176,25,255,0.3) (dark) / rgba(176,25,255,0.2) (light)

/* Shadows */
--shadow-light: Theme-appropriate shadow
--shadow-medium: Enhanced shadow for hover states
```

## Accessibility Features

- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **High Contrast**: Enhanced borders for high contrast mode
- **Focus Indicators**: Clear focus outlines for keyboard navigation
- **Semantic HTML**: Proper ARIA labels and roles
- **Color Contrast**: WCAG AA compliant color ratios

## Responsive Design

The components are fully responsive with breakpoints:
- Mobile: Single column layout
- Tablet (768px+): Two column grid
- Desktop (1024px+): Three column grid for services, five column for process steps

## Animation System

Uses Framer Motion for smooth animations:
- Staggered entrance animations
- Hover micro-interactions
- Smooth theme transitions
- Reduced motion support

## Usage Example

```jsx
import { ServiceThemeProvider } from "./ServiceThemeProvider";
import ServiceCard from "./ServiceCard";
import ProcessStep from "./ProcessStep";

export default function ServicesPage() {
  return (
    <ServiceThemeProvider>
      <main className="services-page">
        <div className="services-container">
          {/* Your services content */}
          <ServiceCard 
            emoji="🎨"
            title="Design Services"
            points={["UI/UX Design", "Responsive Design", "Prototyping"]}
          />
          <ProcessStep 
            number={1}
            title="Discovery"
            description="Understanding your needs"
          />
        </div>
      </main>
    </ServiceThemeProvider>
  );
}
```

## Benefits

1. **Consistent Theming**: All components use the same theme variables
2. **Maintainable**: Centralized theme management
3. **Accessible**: Built-in accessibility features
4. **Performance**: Optimized animations and transitions
5. **Responsive**: Works on all screen sizes
6. **Isolated**: Doesn't affect other parts of the application
