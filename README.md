# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Features a sleek design with smooth animations, dark mode support, and MongoDB integration for dynamic content management.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, and TypeScript
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Toggle between light and dark themes with smooth transitions
- **Interactive UI**: Smooth animations powered by Framer Motion
- **Component Library**: Built with Radix UI and shadcn/ui components
- **MongoDB Integration**: Dynamic content management with MongoDB
- **Contact Form**: Functional contact form with form validation
- **Sections**:
  - Hero section with introduction
  - About section
  - Skills showcase
  - Work experience timeline
  - Projects gallery
  - Achievements
  - Contact form
  - Photo gallery

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- MongoDB database (for contact form and dynamic content)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/parimeena404/Pari-Portfolio-main.git
cd Pari-Portfolio-main
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
MONGODB_URI=your_mongodb_connection_string
```

4. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Built With

### Core
- **[Next.js 16](https://nextjs.org/)** - React framework for production
- **[React 19](https://react.dev/)** - JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### Database & Forms
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database
- **[React Hook Form](https://react-hook-form.com/)** - Form validation
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Additional Libraries
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Recharts](https://recharts.org/)** - Chart library
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carousel component

## 🛠️ Development Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form endpoint
│   │   └── mongodb-status/# MongoDB status endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── about.tsx         # About section
│   ├── achievements.tsx  # Achievements section
│   ├── contact.tsx       # Contact form
│   ├── experience.tsx    # Experience timeline
│   ├── footer.tsx        # Footer component
│   ├── gallery.tsx       # Photo gallery
│   ├── hero.tsx          # Hero section
│   ├── navbar.tsx        # Navigation bar
│   ├── projects.tsx      # Projects showcase
│   └── skills.tsx        # Skills section
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   ├── db.ts            # Database connection
│   └── utils.ts         # Helper functions
├── public/              # Static assets
└── styles/              # Additional styles
```

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The `vercel.json` configuration file is already included for optimal deployment settings.

## 📝 Customization

### Updating Content

1. **Personal Information**: Edit the component files in the `components/` directory
2. **Styling**: Modify `tailwind.config.ts` for theme customization
3. **Typography & Colors**: Update global styles in `app/globals.css`
4. **Database Schema**: Adjust the MongoDB schema in `lib/db.ts`

### Adding New Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Style it using Tailwind CSS classes

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is available for personal and commercial use.

## 👤 Author

**Parimeena**
- GitHub: [@parimeena404](https://github.com/parimeena404)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Built with ❤️ using Next.js and TypeScript
