import { Document } from "mongoose"

export interface InterfaceTodo extends Document {
  _id: number,
  name: string
}