import { Router } from "express";
import TodoController from "../controllers/todo.controller";

const router = Router();
// get my Todo
router.get("/fetchMyTodos", TodoController.fetchMyTodos);

// addTodo
router.post("/add", TodoController.addTodo);

//editTodo
router.put("/edit", TodoController.updateTodo);

//deleteTodo
router.delete("/delete/:id", TodoController.deleteTodo);

export default router;