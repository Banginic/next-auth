import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import { DATABASE_URL } from '@/config/env'
import  * as schema from './schema'

const sql = neon(DATABASE_URL!)
export const db = drizzle(sql, {schema})