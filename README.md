# Data Science Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS, designed specifically for showcasing data science projects and expertise.

## Features

- 🎨 **Modern UI/UX** - Beautiful, clean design with smooth animations
- 🌙 **Dark Mode** - Toggle between light and dark themes with persistent preference
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🚀 **Fast Performance** - Built with Next.js for optimal loading speeds
- 📄 **Resume Section** - Preview and download resume PDF
- 🎯 **Data Science Focus** - Sections tailored for data science professionals:
  - Hero section with introduction
  - About section highlighting expertise
  - Skills section with data science technologies
  - Projects showcase with real projects
  - Professional experience timeline
  - Education section
  - Resume preview and download
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

7. **Resume Section** (`components/Resume.tsx`):
   - Add your resume PDF file to the `public/` folder as `resume.pdf`
   - Update the resume file name if needed
   - The section includes preview and download functionality

8. **Contact Section** (`components/Contact.tsx`):
   - Update contact information
   - Configure form submission (currently uses alert - integrate with your backend/email service)

9. **Dark Mode**:
   - Dark mode toggle is automatically available in the navigation
   - Theme preference is saved to localStorage
   - All components support dark mode styling

### Adding Your Resume

1. Place your resume PDF file in the `public/` folder
2. Name it `resume.pdf` (or update the path in `components/Resume.tsx`)
3. The resume section will automatically allow preview and download

### Adding Your Profile Picture

1. **Prepare your image:**
   - Recommended: 400x400 pixels or larger (square works best)
   - Formats: JPG, PNG, or WebP
   - Keep file size under 500KB

2. **Add to public folder:**
   - Place your image in the `public/` folder
   - Name it `profile.jpg` (or update the filename in `components/Hero.tsx`)

3. **Update Hero component (if needed):**
   - Open `components/Hero.tsx`
   - Find: `const profilePicture = '/profile.jpg'`
   - Change the filename if yours is different (e.g., `'/profile.png'`)
   - Make sure `useProfilePicture = true`

4. **To use initials instead:**
   - Set `useProfilePicture = false` in `components/Hero.tsx`
   - The component will show "KG" initials with a gradient background

See `public/PROFILE_PICTURE_README.md` for detailed instructions.

### Styling

The color scheme can be customized in `tailwind.config.js`. The accent color uses a purple gradient, and dark mode is fully supported. You can modify colors to match your preferences.

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