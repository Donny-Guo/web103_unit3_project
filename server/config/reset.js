import { pool } from "./database.js";
import eventsData from "../data/events.js"

const createEventsTable = async () => {
  try {
    await pool.query(createTableEntry);
    console.log('🎉 gifts table created successfully');
  } catch (error) {
    console.error('⚠️ error creating gifts table', error);
  }
}

const createTableEntry = `
  DROP TABLE IF EXISTS events;

  CREATE TABLE IF NOT EXISTS events (
    event_id SERIAL PRIMARY KEY,
    event_name VARCHAR(255) NOT NULL,
    event_date DATE NOT NULL,
    event_time TIME NOT NULL,
    event_location VARCHAR(255) NOT NULL,
    event_address TEXT NOT NULL
  )
`

const seedEventsTable = async () => {
  await createEventsTable();

  const insertQuery = 
    `
    INSERT INTO events (event_id, event_name, event_date, event_time, event_location, event_address) VALUES ($1, $2, $3, $4, $5, $6)
    `

  eventsData.forEach(event => {
    const values = [
      event.event_id,
      event.event_name,
      event.event_date,
      event.event_time,
      event.event_location,
      event.event_address
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting gift', err)
        return
      }
      console.log(`✅ ${event.event_name} added successfully`)
    })
  })
}

seedEventsTable();