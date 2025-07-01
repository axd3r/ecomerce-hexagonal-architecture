import express from "express";
import cors from "cors";
import syncDatabase from "./database/init.js";
import userRoutes from "./App/users/infrastructure/routes/userRoutes.js";
import addressRoutes from './App/address/infrastructure/routes/addressRoutes.js';
import roleRoutes from "./App/role/infrastructure/routes/roleRoutes.js";
import categoryRoutes from "./App/category/infrastructure/routes/categoryRoutes.js";
import productRoutes from "./App/products/infrastructure/routes/productRoutes.js";
import reviewRoutes from './App/reviews/infrastructure/routes/reviewRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use('/api/address', addressRoutes)
app.use("/api/roles", roleRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);
app.use('/api/review', reviewRoutes)

const PORT = process.env.PORT || 3000;

syncDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
