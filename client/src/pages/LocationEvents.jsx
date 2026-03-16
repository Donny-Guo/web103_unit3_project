import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import '../css/LocationEvents.css'

const locationMap = {
    '/echolounge': 'echolounge',
    '/houseofblues': 'houseofblue',
    '/pavilion': 'pavilion',
    '/americanairlines': 'americanairlines'
}

const LocationEvents = ({ index }) => {
    const [location, setLocation] = useState({})
    const [events, setEvents] = useState([])
    const { pathname } = useLocation()

    useEffect(() => {
        (async () => {
            try {
                const locationKey = locationMap[pathname]
                if (!locationKey) return

                const eventsData = await EventsAPI.getEventsByLocation(locationKey)
                setEvents(eventsData)

                if (eventsData.length > 0) {
                    setLocation({
                        name: eventsData[0].location,
                        address: eventsData[0].address,
                        image: eventsData[0].img_link
                    })
                }
            }
            catch (error) {
                console.error('Error fetching location events:', error)
            }
        })()
    }, [pathname])

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}</p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.name}
                            date={event.date}
                            time={event.time}
                            image={event.img_link}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents