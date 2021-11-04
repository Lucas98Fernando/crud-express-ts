import { Request, Response } from "express";
import User from "../models/Product";

export default {
  async CreateProduct(request: Request, response: Response) {
    return await User.create({
      name: request.body.name,
      price: request.body.price,
      description: request.body.description,
    })
      .then(() => {
        response.status(201).send({
          message: "Produto criado com sucesso!",
        });
      })
      .catch((erro: Response) => {
        response.status(400).send(erro);
      });
  },
  async GetProducts(request: Request, response: Response) {
    return await User.findAll({
      order: [["id", "DESC"]],
    })
      .then((users) => {
        response.status(200).send(users);
      })
      .catch((erro: Response) => {
        response.status(400).send(erro);
      });
  },
  async DeleteProduct(request: Request, response: Response) {
    return await User.destroy({
      where: {
        id: request.params.id,
      },
    })
      .then(() => {
        response.status(200).send({
          message: "Produto removido com sucesso!",
        });
      })
      .catch((erro: Response) => {
        response.status(400).send({
          message: "Não foi possível remover o produto",
        });
      });
  },
  async UpdateProduct(request: Request, response: Response) {
    return await User.update(
      {
        name: request.body.name,
        price: request.body.price,
        description: request.body.description,
      },
      {
        where: {
          id: request.params.id,
        },
      }
    )
      .then(() => {
        response.status(201).send({
          message: "Produto atualizado com sucesso!",
        });
      })
      .catch((erro: Response) => {
        response.status(400).send("Não deu certo!");
      });
  },
};
