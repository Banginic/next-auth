import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable('users', {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    name: varchar('full_name', { length: 255}).notNull(),
    email: varchar('email_address', { length: 255}).notNull().unique(),
    password: varchar('password', { length: 255}).notNull()
})