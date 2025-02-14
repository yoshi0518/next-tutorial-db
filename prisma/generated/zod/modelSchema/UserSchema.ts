import { z } from 'zod';
import { RoleSchema } from '../inputTypeSchemas/RoleSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: RoleSchema,
  id: z.number().int(),
  email: z.string(),
  name: z.string().nullable(),
  password: z.string().nullable(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;
