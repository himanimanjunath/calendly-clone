//responsible file for establishing connection with our database

import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

import * as schema from "./schema"

//initializing the neon client using database_url from env variables

const sql = neon(process.env.DATABASE_URL!)

export const db = drizzle(sql, {schema}) //object taking our schema


