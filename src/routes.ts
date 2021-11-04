import { Router } from "express";
import UserController from "./app/controllers/ProductController";

const routes = Router();

routes.get("/", (request, response) => {
  response.send("Olá !");
});

routes.post("/createProduct", UserController.CreateProduct);
routes.get("/getProducts", UserController.GetProducts);
routes.delete("/deleteProduct/:id", UserController.DeleteProduct);
routes.put("/updateProduct/:id", UserController.UpdateProduct);

export default routes;
