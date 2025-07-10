//need to create our databased tables 

import { boolean, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

//define the events table with fields like name, description, and duration 
const createdAt = timestamp("createdAt").notNull().defaultNow()

// Define a reusable `updatedAt` timestamp column with automatic update on modification
const updatedAt = timestamp("updatedAt")
  .notNull()
  .defaultNow()
  .$onUpdate(() => new Date()) // automatically updates to current time on update

export const EventTable = pgTable(//takes 3 arguments:
    "events", //table name in the database

    { //object that contains all of our fields
        
    //FIRST FIELD 
    id: uuid("id").primaryKey().defaultRandom(),
    //unique ID with default UUID
    
    //uuid("id"): Defines a column named "id" with UUID type

    //.primaryKey(): Makes this UUID the primary key of the table

    //.defaultRandom(): Automatically fills this column with a randomly generated UUID (v4) if no value is provided
    
    //SECOND FIELD 
    name: text("name").notNull(), // event name
      description: text("description"), // optional description
      durationInMinutes: integer("durationInMinutes").notNull(), // duration of the event
      clerkUserId: text("clerkUserId").notNull(),// ID of the user who created it (from Clerk)
      isActive: boolean("isActive").notNull().default(true),// whether the event is currently active
      createdAt,// timestamp when event was created
      updatedAt,// timestamp when event was last updated


    //THIRD FIELD 
    }


)
//pgtable is a function that stands for postgress table 