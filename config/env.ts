import { config } from "dotenv";
config({ path: `process.env`})

export const { DATABASE_URL } = process.env