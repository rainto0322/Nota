import type { Model, SchemaOptions } from 'mongoose'
import mongoose from 'mongoose'

export function defineMongooseModel<T>(
  name: string,
  schema: object,
  options?: SchemaOptions,
  hooks?: (schema: mongoose.Schema<T>) => void
): Model<T> {
  const newSchema = new mongoose.Schema(schema, options as any)
  if (hooks) hooks(newSchema)
  return mongoose.model<T>(name, newSchema)
}

export const options = {
  versionKey: false,
  virtuals: false,
  timestamps: false
}