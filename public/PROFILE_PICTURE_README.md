# Profile Picture Setup

## How to Add Your Profile Picture

1. **Prepare your image:**
   - Recommended size: 400x400 pixels or larger (square aspect ratio works best)
   - Supported formats: JPG, PNG, WebP
   - File size: Keep it under 500KB for best performance

2. **Add your image to the public folder:**
   - Place your profile picture in the `public/` folder
   - Name it `profile.jpg` (or update the filename in `components/Hero.tsx`)
   - Example: `/Users/gaoqianwen/Desktop/portfolio-1/public/profile.jpg`

3. **Update the Hero component (if needed):**
   - Open `components/Hero.tsx`
   - Find the line: `const profilePicture = '/profile.jpg'`
   - Change `'/profile.jpg'` to match your filename (e.g., `'/profile.png'`)
   - Make sure `useProfilePicture` is set to `true`

4. **Alternative: Use initials instead:**
   - Set `useProfilePicture = false` in `components/Hero.tsx`
   - The component will show "KG" initials with a gradient background

## Image Optimization

Next.js automatically optimizes images using the `next/image` component. Your image will be:
- Automatically resized for different screen sizes
- Served in modern formats (WebP) when supported
- Lazy-loaded for better performance

## Troubleshooting

- **Image not showing?** Check that the filename matches exactly (case-sensitive)
- **Image looks stretched?** Use a square image (1:1 aspect ratio)
- **Want to use a different image?** Just change the filename in Hero.tsx
