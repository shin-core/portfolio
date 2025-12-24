export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
}

export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number; // 1-5
  comment: string;
  date: string;
  featured?: boolean;
}

export const portfolioData = {
  personal: {
    name: 'Your Name',
    title: 'Full Stack Developer',
    greeting: "👋 Hello, I'm",
    bio: "I'm a passionate developer who loves creating beautiful, functional, and user-friendly web applications. I specialize in modern web technologies and enjoy turning complex problems into simple, elegant solutions.",
    email: 'your.email@example.com',
    location: 'Your Location',
  },

  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ],

  socialLinks: [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: 'linkedin',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: 'twitter',
    },
    {
      name: 'Email',
      href: 'mailto:your.email@example.com',
      icon: 'email',
    },
  ],

  projects: [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      image: '/project1.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: '/project2.jpg',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts and interactive maps.',
      image: '/project3.jpg',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false,
    },
    {
      id: '4',
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, SEO optimization, and comment system.',
      image: '/project4.jpg',
      technologies: ['Next.js', 'MDX', 'Prisma', 'Vercel'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false,
    },
  ],

  skills: [
    // Frontend
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'Next.js', level: 85, category: 'frontend' },
    { name: 'TypeScript', level: 88, category: 'frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    // Backend
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Express', level: 80, category: 'backend' },
    { name: 'Python', level: 75, category: 'backend' },
    { name: 'PostgreSQL', level: 78, category: 'backend' },
    { name: 'MongoDB', level: 82, category: 'backend' },
    // Tools
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Docker', level: 70, category: 'tools' },
    { name: 'AWS', level: 65, category: 'tools' },
    { name: 'Figma', level: 75, category: 'tools' },
  ],

  experience: [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      location: 'San Francisco, CA',
      startDate: '2022',
      endDate: 'Present',
      description: [
        'Led development of multiple web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality products',
        'Mentored junior developers and conducted code reviews',
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      startDate: '2020',
      endDate: '2022',
      description: [
        'Developed and maintained web applications using modern frameworks',
        'Implemented RESTful APIs and database solutions',
        'Optimized application performance and user experience',
      ],
      technologies: ['Vue.js', 'Express', 'MongoDB', 'PostgreSQL'],
    },
  ],

  about: {
    title: 'About Me',
    paragraphs: [
      "I'm a passionate full-stack developer with a love for creating innovative web solutions. With years of experience in modern web technologies, I've worked on various projects ranging from small startups to large-scale applications.",
      'My journey in web development started with a curiosity about how websites work, and it has evolved into a career focused on building user-friendly, performant, and scalable applications.',
      "When I'm not coding, I enjoy contributing to open-source projects, writing technical blogs, and staying updated with the latest trends in web development.",
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University Name',
        year: '2018',
      },
    ],
  },

  reviews: [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Tech Startup Inc.',
      rating: 5,
      comment: 'Working with this developer was an absolute pleasure. The attention to detail and ability to deliver high-quality code on time exceeded our expectations. Highly recommended!',
      date: '2024-01-15',
      featured: true,
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Digital Solutions',
      rating: 5,
      comment: 'Exceptional technical skills and great communication. The project was delivered ahead of schedule with clean, maintainable code. Will definitely work together again.',
      date: '2023-12-20',
      featured: true,
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'Design Lead',
      company: 'Creative Agency',
      rating: 5,
      comment: 'Amazing collaboration! The developer understood our vision perfectly and brought it to life. The final product was exactly what we envisioned and more.',
      date: '2023-11-10',
      featured: true,
    },
    {
      id: '4',
      name: 'David Thompson',
      role: 'Founder',
      company: 'StartupXYZ',
      rating: 5,
      comment: 'Professional, reliable, and incredibly talented. The developer helped us build a robust application that scaled beautifully. Couldn\'t be happier with the results.',
      date: '2023-10-05',
      featured: false,
    },
    {
      id: '5',
      name: 'Lisa Anderson',
      role: 'Project Manager',
      company: 'Enterprise Corp',
      rating: 5,
      comment: 'Outstanding work ethic and technical expertise. The developer consistently delivered beyond expectations and was always available to help with any questions.',
      date: '2023-09-18',
      featured: false,
    },
    {
      id: '6',
      name: 'James Wilson',
      role: 'CEO',
      company: 'Innovation Labs',
      rating: 5,
      comment: 'One of the best developers I\'ve had the pleasure of working with. Fast, efficient, and always willing to go the extra mile. The code quality is top-notch.',
      date: '2023-08-22',
      featured: false,
    },
  ],
};

