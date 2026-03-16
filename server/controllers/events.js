import { pool } from "../config/database.js";

const getEventById = async (req, res) => {
  try {
    const event_id = req.params.eventId;
    const selectQuery = 
      `
      SELECT * FROM events
      WHERE id = $1
      `
    const results = await pool.query(selectQuery, [event_id])
    console.log(`🎉 Successfully fetched event with id ${event_id}`)
    res.status(200).json(results.rows[0]);
  } catch (error) {
    console.error(`⚠️ error getting event by id ${event_id} from events table`, error);
    res.status(409).json({ error: error.message })
  }
}


const getAllEvents = async (req, res) => {
  try {
    const results = await pool.query(
      `SELECT * FROM events ORDER BY id;`
    )
    console.log('🎉 Successfully fetched all data from events table')
    res.status(200).json(results.rows)
  } catch (error) {
    console.error('⚠️ error getting data from events table', error);
    res.status(409).json({error: error.message})
  }
}

const getEventsByLocation = async (req, res) => {
  try {
    const location = req.params.location;
    const selectQuery = 
      `
      SELECT * FROM events
      WHERE location_name = $1
      `
    const results = await pool.query(selectQuery, [location])
    console.log(`🎉 Successfully fetched all events at location ${location}`)
    res.status(200).json(results.rows)
  } catch (error) {
    console.error(`⚠️ error getting event by location ${location} from events table`, error);
    res.status(409).json({ error: error.message })
  }
}

const getAllLocations = async (req, res) => {
  try {
    const results = await pool.query(
      `SELECT UNIQUE location_name FROM events;`
    )
    console.log('🎉 Successfully fetched all locations from events table')
    res.status(200).json(results.rows)
  } catch (error) {
    console.error('⚠️ error getting all locations from events table', error);
    res.status(409).json({ error: error.message })
  }
}


export default {
  getEventById,
  getAllEvents,
  getEventsByLocation,
  getAllLocations
}