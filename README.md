# ERB Games Family Competition Website

A modern, responsive website for the ERB family competition events, built with React and featuring a beautiful blue and gold color scheme.

![ERB Games Homepage](https://github.com/user-attachments/assets/4a683e91-b1e7-49bf-a9f2-4b7dd662c44e)

## 🏆 Features

- **Home Page** - Welcome section with news and announcements
- **Events Schedule** - Detailed view of competition events with registration status
- **Registration** - Online registration form for family members
- **Results & Statistics** - Leaderboards, achievements, and historical data
- **Photo Gallery** - Interactive gallery with filtering and lightbox view
- **Contact & Announcements** - Contact information and latest news

## 🎨 Design

- **Color Scheme**: Blue and gold theme reflecting family tradition
- **Mobile-First**: Fully responsive design that works on all devices
- **Accessibility**: WCAG compliant with proper contrast and navigation
- **Modern UI**: Clean, intuitive interface with smooth animations

![Mobile View](https://github.com/user-attachments/assets/198f4ff1-421a-457b-bfd8-e2c8f9689171)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/boban15/erbgames.git
cd erbgames
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

Builds the app for production to the `build` folder. The build is minified and the filenames include the hashes.

### Running Tests

```bash
npm test
```

Launches the test runner in interactive watch mode.

## 📁 Project Structure

```
erbgames/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navigation.tsx  # Main navigation bar
│   │   ├── Footer.tsx      # Site footer
│   │   └── *.css          # Component styles
│   ├── pages/             # Page components
│   │   ├── HomePage.tsx    # Landing page
│   │   ├── EventsPage.tsx  # Events schedule
│   │   ├── RegistrationPage.tsx  # Registration form
│   │   ├── ResultsPage.tsx # Results and stats
│   │   ├── PhotoGalleryPage.tsx  # Photo gallery
│   │   ├── ContactPage.tsx # Contact and announcements
│   │   └── *.css          # Page styles
│   ├── assets/            # Images and static files
│   ├── App.tsx            # Main app component
│   ├── App.css            # Global styles and theme
│   └── index.tsx          # Entry point
├── package.json           # Dependencies and scripts
├── project_overview.md    # Project goals and technical decisions
└── README.md             # This file
```

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router DOM
- **Styling**: CSS3 with CSS Variables (no external frameworks)
- **Build Tool**: Create React App
- **Testing**: Jest and React Testing Library

## 🎯 Key Features by Page

### Home Page
- Hero section with call-to-action buttons
- Latest news and announcements cards
- Competition statistics overview
- Responsive grid layouts

### Events Schedule
- Event cards with availability status
- Registration status tracking
- Timeline view of competition schedule
- Interactive buttons for registration

### Registration
- Multi-step form with validation
- Event selection with checkboxes
- Personal information and emergency contacts
- Dietary restrictions and preferences

### Results & Statistics
- Team and individual leaderboards
- Historical results by year
- Achievement badges and special awards
- Family statistics and comparisons

### Photo Gallery
- Filterable photo grid by category
- Lightbox view with navigation
- Upload instructions for family members
- Responsive masonry layout

### Contact & Announcements
- Contact information for organizers
- Latest announcements with categories
- FAQ section
- Social media links
- Newsletter signup

## 🎨 Color Scheme

The website uses a blue and gold color palette:

- **Primary Blue**: `#1e3a8a` - Navigation, headers, and primary elements
- **Light Blue**: `#3b82f6` - Hover states and accents
- **Primary Gold**: `#fbbf24` - Call-to-action buttons and highlights
- **Supporting Colors**: Various grays and whites for text and backgrounds

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop**: 1200px+ with full navigation and multi-column layouts
- **Tablet**: 768px-1199px with adapted grid layouts
- **Mobile**: <768px with hamburger navigation and single-column layouts

## 🔧 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - One-way operation to customize build tools

### Code Style

- TypeScript for type safety
- Functional components with hooks
- CSS modules for styling
- Semantic HTML for accessibility
- ESLint for code quality

## 🚀 Deployment

The application can be deployed to:

- **Vercel**: `npm run build` then deploy the `build` folder
- **Netlify**: Connect to GitHub for automatic deployments
- **GitHub Pages**: Using the `gh-pages` package
- **Any static hosting**: Deploy the `build` folder contents

## 📋 Future Enhancements

- User authentication system
- Real-time registration updates
- Photo upload functionality
- Email notifications
- Mobile app version
- Backend API integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For technical support or questions about the ERB Games website:

- Email: info@erbgames.com
- Phone: (555) 123-4567

## 📄 License

This project is private and intended for the ERB family use only.

---

**Made with ❤️ for the ERB family** - Bringing families together through friendly competition and lasting memories.