# Birthday Website - Pure React Project Setup

This is a standalone React application that runs completely client-side without any server dependencies.

## Setup Instructions

1. **Create a new React project folder:**
   ```bash
   mkdir birthday-website
   cd birthday-website
   ```

2. **Copy these files to your project:**
   - `standalone-package.json` → rename to `package.json`
   - `standalone-index.html` → save as `public/index.html`
   - `standalone-App.js` → save as `src/App.js`
   - `standalone-App.css` → save as `src/App.css`
   - `standalone-index.js` → save as `src/index.js`
   - `standalone-tailwind.config.js` → rename to `tailwind.config.js`

3. **Create the assets folder:**
   ```bash
   mkdir public/assets
   ```

4. **Copy your photos and videos to `public/assets/`:**
   - All the WhatsApp images and videos from your `attached_assets` folder

5. **Install dependencies:**
   ```bash
   npm install
   ```

6. **Install Tailwind CSS:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

7. **Start the development server:**
   ```bash
   npm start
   ```

## Project Structure
```
birthday-website/
├── public/
│   ├── index.html
│   └── assets/
│       ├── WhatsApp Image 2025-05-30 at 5.57.44 PM (1).jpeg
│       ├── WhatsApp Image 2025-05-30 at 5.57.45 PM.jpeg
│       └── ... (all your photos and videos)
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── tailwind.config.js
```

## Features Included

- **Photo Galleries:** Solo photos, couple photos, and celebration photos
- **Video Support:** Plays videos in lightbox with full controls
- **Love Emoji Reactions:** Interactive floating emoji system
- **Birthday Wishes:** Heartfelt messages with interactive elements
- **About Us:** Your love story timeline
- **Responsive Design:** Works on all devices
- **No Server Required:** Pure client-side React application

## Customization

- Replace photo paths in `src/App.js` in the `photoData` object
- Modify birthday messages and love story content
- Adjust colors in `tailwind.config.js` and `src/App.css`

## Running the Project

After setup, simply run:
```bash
npm start
```

The website will open at `http://localhost:3000` and automatically reload when you make changes.

## Building for Production

To create a production build:
```bash
npm run build
```

This creates a `build` folder with static files you can host anywhere.