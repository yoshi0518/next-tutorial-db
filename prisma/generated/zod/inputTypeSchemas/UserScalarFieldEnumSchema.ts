import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','email','name','password','role']);

export default UserScalarFieldEnumSchema;
