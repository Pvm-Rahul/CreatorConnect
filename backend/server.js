const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware (MUST COME BEFORE routes)
app.use(cors());
app.use(express.json()); // 👈 This is REQUIRED to parse JSON body

// ✅ Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.get("/", (req, res) => {
  res.send("🎉 Backend API is running");
  });
  app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
}).catch(err => console.error('❌ MongoDB connection failed:', err));
