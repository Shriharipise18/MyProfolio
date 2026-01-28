

  # Professional Portfolio Website

A modern, responsive portfolio website built with **React.js** and **plain CSS** (no UI frameworks). This portfolio features API integrations with GitHub and LeetCode, dark/light theme toggle, and is fully optimized for recruiters.

## 🚀 Features

- ✅ **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ✅ **Dark/Light Theme** - Toggle between themes with persistent storage
- ✅ **Sticky Navigation** - Easy navigation with active section highlighting
- ✅ **GitHub Integration** - Real-time stats from GitHub API
- ✅ **LeetCode Integration** - Problem-solving statistics
- ✅ **Contact Form** - Frontend validation with success/error states
- ✅ **Smooth Animations** - CSS-only transitions and effects
- ✅ **SEO-Friendly** - Semantic HTML structure
- ✅ **Zero UI Libraries** - Pure CSS implementation

## 📁 Project Structure

```
src/
├── app/
│   └── App.tsx           # Main application component
├── components/
│   ├── Navbar.jsx        # Sticky navigation with theme toggle
│   └── Footer.jsx        # Footer with social links
├── sections/
│   ├── Hero.jsx          # Landing section
│   ├── About.jsx         # About me & skills
│   ├── Projects.jsx      # Project showcase
│   ├── Education.jsx     # Education timeline
│   ├── CodingProfiles.jsx # GitHub & LeetCode stats
│   └── Contact.jsx       # Contact form
├── data/
│   └── portfolio.js      # All portfolio data (CUSTOMIZE THIS!)
└── styles/
    ├── App.css           # Global styles & variables
    ├── Navbar.css        # Navigation styles
    ├── Hero.css          # Hero section styles
    ├── About.css         # About section styles
    ├── Projects.css      # Projects section styles
    ├── Education.css     # Education section styles
    ├── CodingProfiles.css # Coding profiles styles
    ├── Contact.css       # Contact section styles
    └── Footer.css        # Footer styles
```


## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format for better compression
2. **Lazy Loading**: Already implemented for API data
3. **Code Splitting**: Consider implementing for large projects section
4. **CDN**: Host static assets on a CDN for faster delivery

## 🔧 Troubleshooting

### GitHub API Not Working
- Check if username is correct in `portfolio.js`
- GitHub API has rate limits (60 requests/hour for unauthenticated)
- Fallback demo data will be shown if API fails

### LeetCode API Not Working
- LeetCode's GraphQL API may have CORS restrictions
- The app includes fallback demo data
- Consider using a proxy server for production

### Theme Not Persisting
- Check browser's local storage is enabled
- Clear cache and reload


