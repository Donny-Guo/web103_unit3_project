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
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    location_name VARCHAR(128) NOT NULL,
    location VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    img_link TEXT NOT NULL
  )
`

const seedEventsTable = async () => {
  await createEventsTable();

  const insertQuery = 
    `
    INSERT INTO events (id, name, date, time, location_name, location, address, img_link) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `

  eventsData.forEach(event => {
    const values = [
      event.id,
      event.name,
      event.date,
      event.time,
      event.location_name,
      event.location,
      event.address,
      event.img_link,
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting gift', err)
        return
      }
      console.log(`✅ ${event.name} added successfully`)
    })
  })
}

seedEventsTable();