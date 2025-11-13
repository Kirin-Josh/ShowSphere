# StageLights Entertainment - Design System

## Overview
A modern, responsive entertainment and performer booking website featuring energetic design, elegant typography, and professional aesthetics that reflect the excitement of live performances.

## Color Palette

### Primary Colors
- **Electric Purple**: `#6C63FF` - Main brand color, used for CTAs and accents
- **Purple Dark**: `#5449E0` - Hover states for primary elements
- **Vibrant Red**: `#FF3B30` - Secondary accent (alternative option)

### Neutral Colors
- **Dark**: `#1A1A1A` - Primary dark backgrounds
- **Charcoal**: `#2D2D2D` - Secondary dark backgrounds
- **Gray**: `#666666` - Body text on light backgrounds
- **Light Gray**: `#E5E5E5` - Borders and dividers
- **White**: `#FFFFFF` - Primary light backgrounds

## Typography

### Font Families
- **Headings**: Poppins (400, 500, 600, 700, 800)
- **Body Text**: Inter (400, 500, 600, 700)

### Font Sizes
- **H1**: 2.5rem - 4rem (responsive)
- **H2**: 2rem - 3rem (responsive)
- **H3**: 1.5rem - 2rem (responsive)
- **H4**: 1.25rem - 1.5rem (responsive)
- **Body**: 1rem (16px base)

## Components

### Navigation
- **Location**: `/components/Navigation.tsx`
- **Features**: 
  - Sticky header with backdrop blur on scroll
  - Mobile responsive hamburger menu
  - Active page indicator with animated underline
  - Prominent "Book Now" CTA button

### Pages

#### 1. Home Page
- **Location**: `/components/HomePage.tsx`
- **Sections**:
  - Hero section with full-width background image
  - Animated scroll indicator
  - Statistics grid with hover effects
  - Upcoming events preview
  - Call-to-action section with gradient background

#### 2. About Page
- **Location**: `/components/AboutPage.tsx`
- **Sections**:
  - Hero introduction
  - Story section with image
  - Achievement cards grid
  - Mission statement
  - Core values display

#### 3. Gallery Page
- **Location**: `/components/GalleryPage.tsx`
- **Features**:
  - Filterable image grid
  - Lightbox modal with navigation
  - Category filters (All, Performances, Crowd, Portraits)
  - Smooth animations and transitions

#### 4. Events Page
- **Location**: `/components/EventsPage.tsx`
- **Features**:
  - Upcoming events list with detailed cards
  - Event status indicators (Confirmed, Pending, Sold Out)
  - Ticket availability display
  - Direct booking integration

#### 5. Booking Page
- **Location**: `/components/BookingPage.tsx`
- **Features**:
  - Multi-step booking flow (3 steps + confirmation)
  - Progress indicator
  - Event type selection
  - Venue and date picker
  - Payment method integration (Stripe/Flutterwave)
  - Booking confirmation screen

#### 6. Testimonials Page
- **Location**: `/components/TestimonialsPage.tsx`
- **Features**:
  - Featured testimonial carousel
  - Star ratings
  - Client testimonials grid
  - Statistics section (4.9/5 rating, 500+ clients, etc.)

#### 7. Contact Page
- **Location**: `/components/ContactPage.tsx`
- **Features**:
  - Contact form with validation-ready fields
  - Contact information cards
  - Map placeholder
  - FAQ section

#### 8. Admin Dashboard
- **Location**: `/components/AdminDashboard.tsx`
- **Features**:
  - Dark theme design
  - Sidebar navigation
  - Statistics cards with trend indicators
  - Upcoming bookings table
  - Recent activity feed
  - Revenue chart placeholder

### Footer
- **Location**: `/components/Footer.tsx`
- **Features**:
  - Brand information
  - Quick navigation links
  - Social media icons with hover effects
  - Contact information
  - Admin dashboard access link

## Design Tokens

### Spacing Scale
- **XS**: 0.5rem (8px)
- **SM**: 1rem (16px)
- **MD**: 1.5rem (24px)
- **LG**: 2rem (32px)
- **XL**: 3rem (48px)
- **2XL**: 4rem (64px)

### Border Radius
- **SM**: 0.375rem (6px)
- **MD**: 0.5rem (8px)
- **LG**: 1rem (16px)

### Shadows
- **SM**: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- **MD**: `0 4px 6px -1px rgb(0 0 0 / 0.1)`
- **LG**: `0 10px 15px -3px rgb(0 0 0 / 0.1)`
- **XL**: `0 20px 25px -5px rgb(0 0 0 / 0.1)`
- **Glow**: `0 0 20px rgba(108, 99, 255, 0.3)`

## Animation & Interactions

### Transitions
- **Default Duration**: 0.3s
- **Ease**: ease-in-out
- **Hover Scale**: 1.05
- **Active Scale**: 0.95

### Motion Library
Using Motion (Framer Motion) for:
- Page transitions
- Hover effects
- Scroll animations
- Modal animations
- Card hover states
- Button interactions

### Key Animations
1. **Fade In Up**: Elements fade in while moving up slightly
2. **Scale on Hover**: Cards and buttons scale up on hover
3. **Parallax Scrolling**: Hero section background effects
4. **Carousel Transitions**: Smooth slide transitions
5. **Modal Animations**: Scale and fade for lightbox

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
All components are designed mobile-first with progressive enhancement for larger screens.

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast ratios meeting WCAG 2.1 AA standards

## Button Styles

### Primary Button
```tsx
className="px-8 py-4 bg-[#6C63FF] text-white rounded-full hover:bg-[#5449E0] transition-colors shadow-lg"
```

### Secondary Button
```tsx
className="px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/30"
```

### Ghost Button
```tsx
className="px-8 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
```

## Form Elements

### Input Fields
```tsx
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6C63FF] transition-colors"
```

### Select Dropdowns
```tsx
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6C63FF] transition-colors"
```

### Textarea
```tsx
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6C63FF] transition-colors resize-none"
```

## Card Components

### Standard Card
```tsx
className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all"
```

### Dark Card (Admin)
```tsx
className="bg-[#1E293B] rounded-xl border border-gray-700 p-6"
```

## Implementation Notes

1. **Images**: All images use the `ImageWithFallback` component for reliability
2. **Icons**: Using Lucide React icon library
3. **Animations**: Motion/React for smooth transitions
4. **Fonts**: Loaded via Google Fonts CDN
5. **Color System**: CSS custom properties for easy theming

## File Structure

```
/
├── App.tsx                          # Main application component
├── styles/
│   └── globals.css                  # Global styles and design tokens
└── components/
    ├── Navigation.tsx               # Main navigation
    ├── Footer.tsx                   # Site footer
    ├── HomePage.tsx                 # Home page
    ├── AboutPage.tsx                # About/Bio page
    ├── GalleryPage.tsx             # Gallery with lightbox
    ├── EventsPage.tsx              # Events/Schedule page
    ├── BookingPage.tsx             # Booking flow
    ├── TestimonialsPage.tsx        # Testimonials carousel
    ├── ContactPage.tsx             # Contact form & info
    └── AdminDashboard.tsx          # Admin dashboard (dark theme)
```

## Booking Flow Journey

1. **Event Selection**: Choose event type and basic details
2. **Venue & Date**: Select location, date, and provide contact info
3. **Payment**: Choose payment method (Stripe/Flutterwave) and enter details
4. **Confirmation**: Success screen with booking ID and details

## Admin Dashboard Features

- Dark theme (#0F172A background, #1E293B cards)
- Sidebar navigation
- Statistics overview
- Bookings table with status indicators
- Activity feed
- Revenue tracking placeholder

## Future Enhancements

- Integration with real payment gateways
- Backend API connection for booking management
- Email notification system
- Advanced analytics dashboard
- Calendar integration
- Multi-language support
- Video gallery integration
- Live chat support
