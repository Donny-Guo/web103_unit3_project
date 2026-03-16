const eventsData = [
  {
    "id": 1,
    "name": "Leela James - 2BHONEST",
    "date": "2026-03-20",
    "time": "19:00:00",
    "location_name": "houseofblue",
    "location": "House of Blues",
    "address": "2200 N Lamar St, Dallas TX 775202",
    "img_link": "https://dallas.houseofblues.com/_next/image?url=https%3A%2F%2Fs1.ticketm.net%2Fdam%2Fa%2F4f8%2F616e3b44-4ab2-45da-9d01-5597a9d9e4f8_TABLET_LANDSCAPE_LARGE_16_9.jpg&w=384&q=70"
  },
  {
    "id": 2,
    "name": "Red Leather - Tahoe Tour",
    "date": "2026-03-20",
    "time": "19:00:00",
    "location_name": "houseofblue",
    "location": "House of Blues",
    "address": "2200 N Lamar St, Dallas TX 775202",
    "img_link": "https://dallas.houseofblues.com/_next/image?url=https%3A%2F%2Fs1.ticketm.net%2Fdam%2Fa%2Ff9b%2Fe0627185-d51e-4b02-9385-ae20905b2f9b_TABLET_LANDSCAPE_LARGE_16_9.jpg&w=384&q=70"
  },
  {
    "id": 3,
    "name": "Trap Karaoke 21+",
    "date": "2026-03-21",
    "time": "19:00:00",
    "location_name": "houseofblue",
    "location": "House of Blues",
    "address": "2200 N Lamar St, Dallas TX 775202",
    "img_link": "https://assets.livenationcdn.com/uploads/ad910912-7713-48fe-9f97-452c3794ac61.jpg?auto=webp&quality=70&width=384"
  },
  {
    "id": 4,
    "name": "Fey - Hits Tour",
    "date": "2026-03-22",
    "time": "19:00:00",
    "location_name": "houseofblue",
    "location": "House of Blues",
    "address": "2200 N Lamar St, Dallas TX 775202",
    "img_link": "https://dallas.houseofblues.com/_next/image?url=https%3A%2F%2Fs1.ticketm.net%2Fdam%2Fe%2Fbc1%2Fa7f22eb6-e65c-4549-91d3-602817b09bc1_TABLET_LANDSCAPE_LARGE_16_9.jpg&w=384&q=70"
  },
  {
    "id": 5,
    "name": "Microwave - 'Much Love' 10 Year Anniversary Tour",
    "date": "2026-03-24",
    "time": "18:00:00",
    "location_name": "houseofblue",
    "location": "House of Blues",
    "address": "2200 N Lamar St, Dallas TX 775202",
    "img_link": "https://dallas.houseofblues.com/_next/image?url=https%3A%2F%2Fs1.ticketm.net%2Fdam%2Fa%2F344%2Fbb49816d-0760-4ea6-8181-b9fb2a55d344_TABLET_LANDSCAPE_LARGE_16_9.jpg&w=384&q=70"
  },
  {
    "id": 6,
    "name": "Des Rocs",
    "date": "2026-03-24",
    "time": "18:00:00",
    "location_name": "houseofblue",
    "location": "House of Blues",
    "address": "2200 N Lamar St, Dallas TX 775202",
    "img_link": "https://dallas.houseofblues.com/_next/image?url=https%3A%2F%2Fs1.ticketm.net%2Fdam%2Fa%2F8a3%2Fac729be9-b3fe-4fd2-9054-772145aaa8a3_TABLET_LANDSCAPE_LARGE_16_9.jpg&w=384&q=70"
  },
  {
    "id": 7,
    "name": "Club 1BD ft. Hunny Bee, Arty Furtado, Chvmeleon, and Aniya - 21+ Event",
    "date": "2026-03-20",
    "time": "20:00:00",
    "location_name": "echolounge",
    "location": "The Echo Lounge & Music Hall",
    "address": "1323 N Stemmons Fwy, Dallas, TX 75207",
    "img_link": "https://www.theechodallas.com/_next/image?url=https%3A%2F%2Fs1.ticketm.net%2Fdam%2Fe%2Fd6a%2Fca82dfc2-7073-4824-8681-0c302c14fd6a_TABLET_LANDSCAPE_LARGE_16_9.jpg&w=384&q=70"
  },
  {
    "id": 8,
    "name": "Mr.Kitty",
    "date": "2026-03-21",
    "time": "20:00:00",
    "location_name": "echolounge",
    "location": "The Echo Lounge & Music Hall",
    "address": "1323 N Stemmons Fwy, Dallas, TX 75207",
    "img_link": "https://www.theechodallas.com/_next/image?url=https%3A%2F%2Fs1.ticketm.net%2Fdam%2Fe%2Fb06%2F3f931bff-37ae-4464-b7ee-ede32eae5b06_TABLET_LANDSCAPE_LARGE_16_9.jpg&w=384&q=70"
  },
  {
    "id": 9,
    "name": "The Early November & Hellogoodbye: 20...",
    "date": "2026-03-24",
    "time": "19:00:00",
    "location_name": "echolounge",
    "location": "The Echo Lounge & Music Hall",
    "address": "1323 N Stemmons Fwy, Dallas, TX 75207",
    "img_link": "https://www.theechodallas.com/_next/image?url=https%3A%2F%2Fs1.ticketm.net%2Fdam%2Fa%2F619%2F5a40535c-12d9-49c6-814d-63347d2b5619_TABLET_LANDSCAPE_LARGE_16_9.jpg&w=384&q=70"
  },
  {
    "id": 10,
    "name": "Benee",
    "date": "2026-03-26",
    "time": "19:00:00",
    "location_name": "echolounge",
    "location": "The Echo Lounge & Music Hall",
    "address": "1323 N Stemmons Fwy, Dallas, TX 75207",
    "img_link": "https://www.theechodallas.com/_next/image?url=https%3A%2F%2Fs1.ticketm.net%2Fdam%2Fa%2F6ef%2F7bf94ee4-25c8-4cd0-b6ea-5050712536ef_TABLET_LANDSCAPE_LARGE_16_9.jpg&w=384&q=70"
  },
  {
    "id": 11,
    "name": "A Flock of Seagulls",
    "date": "2026-03-27",
    "time": "19:00:00",
    "location_name": "echolounge",
    "location": "The Echo Lounge & Music Hall",
    "address": "1323 N Stemmons Fwy, Dallas, TX 75207",
    "img_link": "https://www.theechodallas.com/_next/image?url=https%3A%2F%2Fs1.ticketm.net%2Fdam%2Fa%2F473%2Ff04d9301-699a-4f6f-a468-6de6217ae473_1808021_TABLET_LANDSCAPE_LARGE_16_9.jpg&w=384&q=70"
  },
  {
    "id": 12,
    "name": "Orbit Culture - Death Above Life North...",
    "date": "2026-03-31",
    "time": "19:00:00",
    "location_name": "echolounge",
    "location": "The Echo Lounge & Music Hall",
    "address": "1323 N Stemmons Fwy, Dallas, TX 75207",
    "img_link": "https://www.theechodallas.com/_next/image?url=https%3A%2F%2Fs1.ticketm.net%2Fdam%2Fa%2F01e%2Fdea702b9-8e7f-402e-a0e3-9b1c0d94501e_TABLET_LANDSCAPE_LARGE_16_9.jpg&w=384&q=70"
  },
  {
    "id": 13,
    "name": "Bad Omens",
    "date": "2026-03-19",
    "time": "19:00:00",
    "location_name": "americanairlines",
    "location": "American Airlines Center",
    "address": "2500 Victory Avenue, Dallas, TX 75219",
    "img_link": "https://www.americanairlinescenter.com/assets/img/Static_Digital_655x374_BadOmens_2026_Regional_AmericanAirlinesCenter_0319-5150ed3301.jpg"
  },
  {
    "id": 14,
    "name": "Mavericks vs. Clippers",
    "date": "2026-03-21",
    "time": "19:30:00",
    "location_name": "americanairlines",
    "location": "American Airlines Center",
    "address": "2500 Victory Avenue, Dallas, TX 75219",
    "img_link": "https://www.americanairlinescenter.com/assets/img/25-26-Tickets-on-Sale_Ticketmaster-665_LAC-b1ee243e9c.t.jpg"
  },
  {
    "id": 15,
    "name": "Stars vs. Golden Knights",
    "date": "2026-03-22",
    "time": "18:00:00",
    "location_name": "americanairlines",
    "location": "American Airlines Center",
    "address": "2500 Victory Avenue, Dallas, TX 75219",
    "img_link": "https://www.americanairlinescenter.com/assets/img/Stars_VEG_665-6221fcde4c.t.png"
  },
  {
    "id": 16,
    "name": "Humbe",
    "date": "2026-03-18",
    "time": "20:00:00",
    "location_name": "pavilion",
    "location": "The Pavilion at Toyota Music Factory",
    "address": "300 W Las Colinas Blvd, Irving, TX 75039",
    "img_link": "https://s1.ticketm.net/dam/a/39e/84f7f505-ad5e-43a9-862f-c5cc1f28839e_EVENT_DETAIL_PAGE_16_9.jpg"
  }
]

export default eventsData;