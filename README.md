# Data Science Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS, designed specifically for showcasing data science projects and expertise.

## Features

- 🎨 **Modern UI/UX** - Beautiful, clean design with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🚀 **Fast Performance** - Built with Next.js for optimal loading speeds
- 🎯 **Data Science Focus** - Sections tailored for data science professionals:
  - Hero section with introduction
  - About section highlighting expertise
  - Skills section with data science technologies
  - Projects showcase with 6 example projects
  - Professional experience timeline
  - Education and certifications
  - Contact form

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update social media links (GitHub, LinkedIn, Email)
   - Modify the introduction text

2. **About Section** (`components/About.tsx`):
   - Update the about me description
   - Modify the expertise cards

3. **Skills Section** (`components/Skills.tsx`):
   - Add or remove skill categories
   - Update technologies and icons

4. **Projects Section** (`components/Projects.tsx`):
   - Replace example projects with your own
   - Update project descriptions, technologies, and links

5. **Experience Section** (`components/Experience.tsx`):
   - Update work experience entries
   - Modify job descriptions and achievements

6. **Education Section** (`components/Education.tsx`):
   - Update education history
   - Add or modify certifications

7. **Contact Section** (`components/Contact.tsx`):
   - Update contact information
   - Configure form submission (currently uses alert - integrate with your backend/email service)

8. **Navigation** (`components/Navigation.tsx`):
   - Update the portfolio name/logo

### Styling

The color scheme can be customized in `tailwind.config.js`. The primary color is set to a blue gradient, but you can modify it to match your preferences.

## Deployment

This portfolio can be easily deployed to:

- **Vercel** (recommended for Next.js): Connect your GitHub repository
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **AWS Amplify**: Follow Next.js deployment guide
- **Any static hosting**: Export as static site using `next export`

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and customize it for your own portfolio!