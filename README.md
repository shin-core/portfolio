# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Features a beautiful gradient-based design with animated loading states, client reviews section, and a centralized content management system.

![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8)

## ✨ Features

- **🎨 Modern Design**: Beautiful gradient-based UI with smooth animations and dark mode support
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **⚡ Animated Loading**: Advanced loading progress bar with multiple animation effects (gradient flow, shimmer, wave, glow)
- **📝 Auto-Generated Content**: Centralized data file - update one file to change everything
- **⭐ Reviews Section**: Display client testimonials with star ratings and featured reviews
- **🧭 Smart Navigation**: Fixed navbar with scroll effects, active link highlighting, and mobile menu
- **🔗 Social Integration**: Easy-to-customize social media links with icons
- **🔐 Login Page**: Ready-to-use authentication page with social login options
- **💻 TypeScript**: Full type safety throughout the application
- **🚀 SEO Optimized**: Built with Next.js App Router for optimal performance
- **🌙 Dark Mode**: Automatic dark mode support

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page with introduction
│   │   ├── loading.tsx         # Route loading state
│   │   ├── login/
│   │   │   └── page.tsx        # Login/authentication page
│   │   └── globals.css         # Global styles and animations
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar component
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Reviews.tsx         # Reviews/testimonials section
│   │   ├── SocialIcons.tsx     # Social media icons component
│   │   ├── LoadingProgress.tsx # Animated progress bar
│   │   └── LoadingSpinner.tsx  # Loading spinner component
│   └── data/
│       └── portfolio.ts        # Centralized data file (EDIT THIS!)
├── public/                     # Static assets
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Customization Guide

### Step 1: Update Your Personal Information

Edit `src/data/portfolio.ts` to customize your portfolio:

```typescript
personal: {
  name: 'Your Name',           // Your full name
  title: 'Your Title',         // Your job title
  greeting: "👋 Hello, I'm",   // Greeting message
  bio: 'Your bio...',          // Your bio/description
  email: 'your@email.com',     // Your email
  location: 'Your Location',   // Your location
}
```

### Step 2: Update Navigation

Modify the navigation items in the same file:

```typescript
navigation: [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  // Add your own pages
]
```

### Step 3: Add Your Projects

Update the projects array with your work:

```typescript
projects: [
  {
    id: '1',
    title: 'Project Name',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://your-site.com',
    featured: true,
  },
]
```

### Step 4: Update Social Links

Add your social media profiles:

```typescript
socialLinks: [
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: 'github' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', icon: 'linkedin' },
]
```

### Step 5: Customize Colors

Edit gradient colors in components:
- Primary: `from-blue-600 to-purple-600`
- Secondary: `from-purple-600 to-pink-600`
- Find and replace color codes in component files

## 🛠️ Technologies Used

- **Framework**: [Next.js 16.1.0](https://nextjs.org/) - React framework with App Router
- **UI Library**: [React 19.2.3](https://react.dev/) - Latest React version
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Loading**: [nprogress](https://github.com/rstacruz/nprogress) - Progress bar library
- **Fonts**: [Geist](https://vercel.com/font) - Modern font family

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on http://localhost:3000 |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint to check code quality |

## 🎯 Key Features Explained

### Loading Animation System

The portfolio includes an advanced loading system:

- **Progress Bar**: Animated gradient bar at the top during route changes
- **Animations**: Multiple effects including gradient flow, shimmer, wave, and glow
- **Spinner**: Full-screen spinner with multiple rotating rings
- **Smooth Transitions**: All animations are optimized for performance

### Reviews Section

- Display client testimonials with 5-star ratings
- Featured reviews system
- Average rating calculation
- Responsive grid layout (1-3 columns based on screen size)
- Show more/less functionality

### Navigation System

- Fixed navbar that appears on scroll
- Active link highlighting based on current route
- Mobile-responsive hamburger menu
- Smooth scroll effects with backdrop blur

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel will automatically detect Next.js and configure everything
5. Click "Deploy"

Your site will be live in minutes!

### Deploy to Other Platforms

This Next.js app can be deployed to:

- **Netlify**: Connect your GitHub repo and deploy
- **AWS Amplify**: Use AWS Amplify Console
- **Railway**: One-click deployment
- **Render**: Connect repo and deploy
- **DigitalOcean App Platform**: Deploy with App Platform

All platforms support Next.js out of the box.

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
npm run dev -- -p 3001
```

### Build Errors

Clear the `.next` folder and rebuild:

```bash
rm -rf .next
npm run build
```

### TypeScript Errors

Make sure all dependencies are installed:

```bash
npm install
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

For questions, issues, or feature requests:

- Open an issue on GitHub
- Contact through the portfolio website
- Check the documentation

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and animations custom-built
- Design inspired by modern portfolio trends

---

**Made with ❤️ using Next.js and React**

*Last updated: 2024*
