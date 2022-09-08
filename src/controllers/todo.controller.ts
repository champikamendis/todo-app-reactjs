import { Request, Response } from "express";

import { InterfaceTodo } from "../interfaces/todo.interface";
import TODO from "../model/todo.model";

class TodoController {

  static fetchMyTodos = async (req: Request, res: Response) => {
    try {
      const todo = await TODO.find();
      if (todo) {
        return res.status(200).send(todo);
      } else {
        return res.status(401).send({ message: "Todo fetching failed" });
      }
    } catch (error) {
      return res.status(401).send({ message: error });
    }
  };

  static addTodo = async (req: Request, res: Response) => {
    let { _id, name } = req.body;

    try {
      const newTODO: InterfaceTodo = new TODO({
        _id,
        name,
      });
      const todo = await newTODO.save();
      if (todo) {
        return res.status(200).send(todo);
      } else {
        return res.status(401).send({ message: "Todo adding failed" });
      }
    } catch (error) {
      return res.status(401).send({ message: error });
    }
  };

  static updateTodo = async (req: Request, res: Response) => {
    let { name, _id } = req.body;
    try {
      const newTODO: InterfaceTodo = new TODO({
        _id,
        name,
      });
      const todo = await TODO.updateOne({ _id }, newTODO);
      if (todo) {
        return res.status(200).send(todo);
      } else {
        return res.status(401).send({ message: "Todo update failed" });
      }
    } catch (error) {
      return res.status(401).send({ message: error });
    }
  };

  static deleteTodo = async (req: Request, res: Response) => {
    try {
      let { id } = req.params;
      const todo = await TODO.deleteOne({ _id: id });
      if (todo) {
        return res.status(200).send(todo);
      } else {
        return res.status(401).send({ message: "Todo delete failed" });
      }
    } catch (error) {
      return res.status(401).send({ message: error });
    }
  };
}

export default TodoController;
