import { Router } from "express";
import todo from './todo.route';

const routes = Router();

routes.use("/todo", todo);

export default routes;