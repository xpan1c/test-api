import express, { Express } from "express";
import productRoutes from "./api/routes/productRoutes";
import { errorHandler } from "./api/middleware/errorHandler";

const app: Express = express();
const PORT: string | number = process.env.PORT || 3000;

app.use(express.json());
app.use("/products", productRoutes);
app.use(errorHandler)

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export { app }