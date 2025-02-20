import express from 'express';
import pedidoRoutes from './routes/pedidoRoutes';
import dotenv from 'dotenv';



dotenv.config();

const app = express();

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});
export default app;

app.use(express.json());

app.use('/api', pedidoRoutes);







