import { model, Schema } from "mongoose"
import { InterfaceTodo } from "../interfaces/todo.interface"

const todoSchema: Schema = new Schema(
  {
    _id: {
      type: Number,
      required: true
    }
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default model<InterfaceTodo>("Todo", todoSchema)