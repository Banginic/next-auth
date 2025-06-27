import { defineConfig } from 'drizzle-kit'
import { DATABASE_URL } from './config/env'

export default defineConfig({
    out: './drizzle/migrate.ts',
    schema: './drizzle/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: DATABASE_URL!
    }
})