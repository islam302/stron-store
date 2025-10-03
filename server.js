const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const os = require('os');

const app = express();
const PORT = 3001;

// Enable CORS for React app with more permissive settings for mobile access
app.use(cors({
  origin: true, // Allow all origins for development
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

// Serve static files from public directory
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// API endpoint to list files in a category folder
app.get('/api/files/:category', (req, res) => {
  const category = req.params.category;
  const folderPath = path.join(__dirname, 'public/assets', category);
  
  try {
    if (!fs.existsSync(folderPath)) {
      return res.json([]);
    }
    
    const files = fs.readdirSync(folderPath)
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
      })
      .map(file => `/assets/${category}/${file}`);
    
    res.json(files);
  } catch (error) {
    console.error('Error reading folder:', error);
    res.status(500).json({ error: 'Could not read folder' });
  }
});

// Function to get local IP address for mobile access
function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const interface of interfaces[name]) {
      if (interface.family === 'IPv4' && !interface.internal) {
        return interface.address;
      }
    }
  }
  return 'localhost';
}

app.listen(PORT, '0.0.0.0', () => {
  const localIP = getLocalIPAddress();
  console.log(`File server running on:`);
  console.log(`  Local:    http://localhost:${PORT}`);
  console.log(`  Network:  http://${localIP}:${PORT}`);
  console.log('');
  console.log('Available endpoints:');
  console.log('  GET /api/files/watches');
  console.log('  GET /api/files/mobile-covers');
  console.log('  GET /api/files/headphones');
  console.log('  GET /api/files/earbuds');
  console.log('  GET /api/files/power-banks');
  console.log('  GET /api/files/adapters');
  console.log('');
  console.log(`📱 For mobile access, use: http://${localIP}:3000`);
});
