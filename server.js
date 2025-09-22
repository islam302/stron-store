const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Enable CORS for React app
app.use(cors());

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

app.listen(PORT, () => {
  console.log(`File server running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('  GET /api/files/watches');
  console.log('  GET /api/files/mobile-covers');
  console.log('  GET /api/files/headphones');
  console.log('  GET /api/files/earbuds');
  console.log('  GET /api/files/power-banks');
  console.log('  GET /api/files/adapters');
});
