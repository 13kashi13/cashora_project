# CASHORA.TECH - AI-Powered Content Creation Platform

A full-stack web application for automated video and image content creation with analytics dashboard.

## 🚀 Features

### Landing Pages
- **Modern Landing Page** - Framer-exported design with animated backgrounds
- **Contact Page** - Get in touch form
- **Team Page** - Meet the team
- **Venue & Workflow Pages** - Additional information pages

### Authentication System
- **Session-based authentication** with Express.js
- **Secure login system** with demo accounts
- **Protected dashboard routes**

### Dashboard Analytics
- **6 Navigation Sections:**
  - Dashboard - Overview with stats and quick actions
  - Create - Multi-mode content creation
  - Library - Video management with filters
  - Distribution - Platform connections and scheduling
  - Analytics - Detailed platform-specific analytics
  - Settings - Profile and preferences

### Content Creation (Create Page)
#### 3 Creation Modes:
1. **AI Video from Text** - Generate videos from prompts
2. **Upload Video** - Upload and enhance with AI
3. **Create Image** - Upload OR AI-generate images

#### Features:
- Drag & drop file uploads
- Multi-platform distribution (YouTube, Instagram, TikTok, Twitter, LinkedIn)
- Aspect ratio selection (16:9, 9:16, 1:1, 4:5, Auto)
- Tone/style customization
- AI enhancements (voiceover, captions, background removal, etc.)
- Progress tracking with animation

### Analytics Dashboard
- **Platform-specific analytics** with dropdown selector
- **Interactive charts** using ApexCharts library
- **4 Charts per platform:**
  - YouTube: Views, Engagement, Subscribers, Traffic Sources
  - Instagram: Reach, Post Types, Engagement, Stories vs Feed
  - TikTok: Views, Engagement, Traffic, Watch Time
  - Twitter: Impressions, Engagement, Tweet Types, Actions

### Content Library
- **Video cards** with thumbnails
- **Status badges** (Published, Rendering, Draft)
- **Filtering system** (All, Published, Rendering, Draft)
- **Action buttons** (Edit, Publish/Republish, Delete)

### Distribution
- **Platform connection management** with toggles
- **Scheduled posts** list with status
- **Connected accounts** display

## 🛠️ Tech Stack

### Frontend
- **HTML5/CSS3** - Static pages with modern design
- **JavaScript (Vanilla)** - Interactive functionality
- **ApexCharts** - Professional chart library for analytics
- **Framer Components** - Landing page animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web server framework
- **express-session** - Session management
- **dotenv** - Environment variable management

### Development
- **Python HTTP Server** - For serving static frontend (port 8000)
- **Node.js Server** - For authentication and API (port 4000)

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- Python 3.x
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd majorproject
```

2. **Install backend dependencies**
```bash
cd server
npm install
```

3. **Configure environment variables**
```bash
# Create server/.env file
cp server/.env.example server/.env
# Edit with your SESSION_SECRET
```

4. **Start the backend server**
```bash
cd server
node index.js
```
Server will run on `http://127.0.0.1:4000`

5. **Start the frontend server** (in a new terminal)
```bash
cd /Users/vaibhavgawai/Downloads/majorproject
python3 -m http.server 8000
```
Frontend will run on `http://127.0.0.1:8000`

## 🔐 Demo Accounts

```
Email: demo@cashora.tech
Password: demo123

Email: admin@cashora.tech
Password: admin123

Email: test@example.com
Password: test123
```

## 📁 Project Structure

```
majorproject/
├── index.html              # Landing page
├── 404/                    # 404 error page
├── contact/                # Contact page
├── team/                   # Team page
├── venue/                  # Venue page
├── workflow/               # Workflow page
├── terms-and-conditions/   # Terms page
├── login/                  # Login page
├── dashboard/              # Dashboard application
│   ├── index.html         # Main dashboard
│   └── charts.js          # ApexCharts configuration
├── assets/                 # Static assets
│   └── js/                # JavaScript modules
└── server/                 # Backend server
    ├── index.js           # Express server
    ├── package.json       # Dependencies
    └── .env              # Environment variables (not in git)
```

## 🎨 Design Features

- **Dark Theme** - #0a0a0a background with #111111 cards
- **Blue Accent** - #3344ff / #1c2bff for interactive elements
- **Responsive Design** - Mobile-friendly layouts
- **Smooth Animations** - Page transitions and chart animations
- **Professional UI** - Clean, modern interface

## 📊 Analytics Metrics

The dashboard tracks:
- Total Views
- Watch Time
- New Followers
- Revenue
- Engagement Rates
- Platform-specific metrics
- Content performance

## 🚀 Deployment

### Frontend (Static)
Can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Backend
Can be deployed to:
- Heroku
- Railway
- Render
- DigitalOcean
- AWS EC2

## 🔧 Configuration

### Session Secret
Set in `server/.env`:
```
SESSION_SECRET=your-super-secret-key-change-in-production
```

### Ports
- Frontend: 8000 (can be changed in Python command)
- Backend: 4000 (can be changed in server/index.js)

## 📝 License

This project is for educational purposes.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- Charts require hard refresh (Cmd+Shift+R) after updates
- Browser caching may show old content

## 📞 Support

For issues and questions, please open an issue in the GitHub repository.

---

Made with ❤️ for content creators
