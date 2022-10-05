import express from 'express';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
const app = express();

//we don't able to sent any data to our db without calling this
app.use(express.json());
app.use('/api/posts', postRoutes);

app.get('/blogtest', (req, res) => {
  res.json('it works');
});

app.listen(8080, () => {
  console.log('Connected');
});




// 1. Define System. Write different types of systems.
// 2. What is SDLC? Describe each phase of SDLC.
// 3. Define feasibility study. Explain different types of the feasibility study.