import { z } from 'zod';

export const TodoScalarFieldEnumSchema = z.enum(['id','title','completed','createdAt','updatedAt']);

export default TodoScalarFieldEnumSchema;
