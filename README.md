# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Features a beautiful design with animated loading states, reviews section, and auto-generated content system.

## ✨ Features

- **Modern Design**: Beautiful gradient-based UI with dark mode support
- **Responsive Layout**: Fully responsive design that works on all devices
- **Animated Loading**: Beautiful loading progress bar and spinner with multiple animations
- **Auto-Generated Content**: Centralized data file for easy content management
- **Reviews Section**: Display client testimonials with ratings
- **Navigation Bar**: Fixed navbar with smooth scrolling and active link highlighting
- **Footer**: Comprehensive footer with navigation and social links
- **Login Page**: Ready-to-use authentication page
- **TypeScript**: Full type safety throughout the application
- **SEO Optimized**: Built with Next.js App Router for optimal performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── loading.tsx      # Loading state
│   │   ├── login/           # Login page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Reviews.tsx      # Reviews/testimonials
│   │   ├── SocialIcons.tsx  # Social media icons
│   │   ├── LoadingProgress.tsx  # Progress bar
│   │   └── LoadingSpinner.tsx   # Loading spinner
│   └── data/
│       └── portfolio.ts     # Centralized data file
├── public/                  # Static assets
└── package.json
```

## 🎨 Customization

### Updating Your Information

Edit `src/data/portfolio.ts` to customize:

- **Personal Information**: Name, title, bio, email, location
- **Navigation Items**: Menu items and links
- **Social Links**: GitHub, LinkedIn, Twitter, Email
- **Projects**: Project list with details
- **Skills**: Technical skills with proficiency levels
- **Experience**: Work history and education
- **Reviews**: Client testimonials and ratings
- **About Section**: About me content

All components automatically use this data, so you only need to update one file!

### Styling

The project uses Tailwind CSS. You can customize:

- Colors: Edit gradient colors in components
- Fonts: Modify fonts in `src/app/layout.tsx`
- Animations: Adjust animations in `src/app/globals.css`

## 🛠️ Technologies Used

- **Framework**: Next.js 16.1.0
- **UI Library**: React 19.2.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Loading**: nprogress
- **Fonts**: Geist Sans & Geist Mono

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚢 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## 🎯 Features in Detail

### Loading Animation
- Animated gradient progress bar
- Multiple animation effects (shimmer, wave, glow)
- Full-screen loading spinner
- Route transition animations

### Reviews Section
- Star ratings display
- Featured reviews toggle
- Average rating calculation
- Responsive grid layout

### Navigation
- Fixed navbar with scroll effects
- Active link highlighting
- Mobile-responsive hamburger menu
- Smooth transitions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or inquiries, please open an issue or contact through the portfolio website.

---

Built with ❤️ using Next.js and React
