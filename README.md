# Pari Meena - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Software Developer and Computer Science Engineer. Built with Next.js 16, TypeScript, and Tailwind CSS, featuring a sleek design with smooth animations, dark mode support, and MongoDB integration.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, and TypeScript
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Dark Mode**: Seamless toggle between light and dark themes
- **Interactive UI**: Smooth animations powered by Framer Motion
- **Component Library**: Built with Radix UI and shadcn/ui components
- **MongoDB Integration**: Dynamic content management and contact form storage
- **SEO Optimized**: Meta tags and structured data for better visibility

## 📋 Sections

- **Hero Section**: Introduction with typing animation and social links
- **About**: Professional background and journey
- **Skills**: Technical and soft skills categorized by domain
- **Experience**: Timeline of hackathons, leadership roles, and projects
- **Projects**: Portfolio of web apps, mobile apps, and hackathon projects
- **Achievements**: Certifications and awards with downloadable certificates
- **Gallery**: Event photos from hackathons and competitions
- **Contact**: Functional contact form with email integration

## 🏆 Highlights

- **Smart India Hackathon 2025 Winner** - Krishi Bhandu (Flutter app for farmers)
- **I Love Hackathon Winner** - Stock Saarthi (Web3 platform)
- **Navonmesh Hackathon Winner** - Frontend & API integration
- **GDGOC IET DAVV Creative Team Lead** - Leading developer community initiatives
- Multiple certifications from NVIDIA, CDAC, McKinsey, Mastercard, and more

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- MongoDB database (for contact form functionality)

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

This project is deployed on [Vercel](https://vercel.com/) and optimized for production:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard (`MONGODB_URI`)
4. Deploy!

The `vercel.json` configuration file is already included for optimal deployment settings.

## 📝 Customization

### Updating Content

1. **Personal Information**: Edit component files in the `components/` directory
2. **Projects**: Update `components/projects.tsx` with your projects
3. **Experience**: Modify `components/experience.tsx` for work history
4. **Skills**: Customize `components/skills.tsx` to reflect your expertise
5. **Images**: Add your images to the `public/` directory

### Styling

1. **Theme Colors**: Modify `tailwind.config.ts` for custom color schemes
2. **Typography**: Update global styles in `app/globals.css`
3. **Dark Mode**: Customize dark mode colors in component files

## 🔧 Tech Stack Summary

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui, Framer Motion
- **Database**: MongoDB
- **Deployment**: Vercel
- **Tools**: pnpm, ESLint, PostCSS

## 📧 Contact

- **Email**: parimeena404@gmail.com
- **GitHub**: [@parimeena404](https://github.com/parimeena404)
- **LinkedIn**: [Pari Meena](https://www.linkedin.com/in/pari-meena-5b7814297)

## 🎯 Project Status

✅ **Complete** - Portfolio is fully functional with all sections implemented

### Recent Updates (January 2026)
- Added Smart India Hackathon 2025 experience and Krishi Bhandu project
- Updated GDGOC timeline with detailed contributions
- Added certificates for all achievements
- Updated gallery with recent event photos
- Optimized skills section and hero introduction
- Removed blockchain-specific technologies, focused on core development skills

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Pari Meena**
- GitHub: [@parimeena404](https://github.com/parimeena404)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Built with ❤️ using Next.js and TypeScript
