import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    if (!flights) {
      return NextResponse.json(
        { message: 'Flights data not found.' },
        { status: 404 }
      );
    }

    if (!Array.isArray(flights)) {
      return NextResponse.json(
        { message: 'Flights data is not in the expected format.' },
        { status: 400 }
      );
    }

    return NextResponse.json(flights, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: 'An unexpected error occurred while fetching flights.',
      },
      { status: 500 }
    );
  }
}

const flights = [
  {
    id: 1,
    airline: 'American Airlines',
    flightNumber: 'AA123',
    departureAirport: {
      code: 'JFK',
      name: 'John F. Kennedy International Airport',
      city: 'New York',
    },
    arrivalAirport: {
      code: 'LAX',
      name: 'Los Angeles International Airport',
      city: 'Los Angeles',
    },
    departureTime: '2024-01-31T08:00:00',
    arrivalTime: '2024-01-31T10:00:00',
    duration: '2 hours',
    price: {
      economy: { adult: 200, child: 150, infant: 50, student: 180 },
      business: { adult: 400, child: 300, infant: 100, student: 360 },
    },
  },
  {
    id: 2,
    airline: 'Delta Air Lines',
    flightNumber: 'DL456',
    departureAirport: {
      code: 'LAX',
      name: 'Los Angeles International Airport',
      city: 'Los Angeles',
    },
    arrivalAirport: {
      code: 'SFO',
      name: 'San Francisco International Airport',
      city: 'San Francisco',
    },
    departureTime: '2024-02-01T10:00:00',
    arrivalTime: '2024-02-01T12:00:00',
    duration: '2 hours',
    price: {
      economy: { adult: 180, child: 140, infant: 40, student: 160 },
      business: { adult: 380, child: 280, infant: 90, student: 340 },
    },
  },
  {
    id: 3,
    airline: 'United Airlines',
    flightNumber: 'UA789',
    departureAirport: {
      code: 'ORD',
      name: "Chicago O'Hare International Airport",
      city: 'Chicago',
    },
    arrivalAirport: {
      code: 'DFW',
      name: 'Dallas/Fort Worth International Airport',
      city: 'Dallas',
    },
    departureTime: '2024-02-02T09:00:00',
    arrivalTime: '2024-02-02T12:00:00',
    duration: '3 hours',
    price: {
      economy: { adult: 220, child: 170, infant: 60, student: 200 },
      business: { adult: 420, child: 320, infant: 110, student: 380 },
    },
  },
  {
    id: 4,
    airline: 'Southwest Airlines',
    flightNumber: 'WN101',
    departureAirport: {
      code: 'LAS',
      name: 'McCarran International Airport',
      city: 'Las Vegas',
    },
    arrivalAirport: {
      code: 'DEN',
      name: 'Denver International Airport',
      city: 'Denver',
    },
    departureTime: '2024-02-03T11:00:00',
    arrivalTime: '2024-02-03T13:00:00',
    duration: '2 hours',
    price: {
      economy: { adult: 190, child: 150, infant: 50, student: 170 },
      business: { adult: 380, child: 280, infant: 90, student: 340 },
    },
  },
  {
    id: 5,
    airline: 'British Airways',
    flightNumber: 'BA234',
    departureAirport: {
      code: 'LHR',
      name: 'London Heathrow Airport',
      city: 'London',
    },
    arrivalAirport: {
      code: 'CDG',
      name: 'Charles de Gaulle Airport',
      city: 'Paris',
    },
    departureTime: '2024-02-04T14:00:00',
    arrivalTime: '2024-02-04T16:00:00',
    duration: '2 hours',
    price: {
      economy: { adult: 250, child: 200, infant: 50, student: 230 },
      business: { adult: 500, child: 400, infant: 100, student: 460 },
    },
  },
  {
    id: 6,
    airline: 'Qantas Airways',
    flightNumber: 'QF789',
    departureAirport: {
      code: 'SYD',
      name: 'Sydney Airport',
      city: 'Sydney',
    },
    arrivalAirport: {
      code: 'LAX',
      name: 'Los Angeles International Airport',
      city: 'Los Angeles',
    },
    departureTime: '2024-02-05T16:00:00',
    arrivalTime: '2024-02-05T18:00:00',
    duration: '14 hours',
    price: {
      economy: { adult: 800, child: 600, infant: 200, student: 720 },
      business: { adult: 1500, child: 1200, infant: 300, student: 1350 },
    },
  },
  {
    id: 7,
    airline: 'Emirates',
    flightNumber: 'EK789',
    departureAirport: {
      code: 'DXB',
      name: 'Dubai International Airport',
      city: 'Dubai',
    },
    arrivalAirport: {
      code: 'JFK',
      name: 'John F. Kennedy International Airport',
      city: 'New York',
    },
    departureTime: '2024-02-06T12:00:00',
    arrivalTime: '2024-02-06T18:00:00',
    duration: '14 hours',
    price: {
      economy: { adult: 900, child: 700, infant: 300, student: 810 },
      business: { adult: 1800, child: 1400, infant: 600, student: 1620 },
    },
  },
  {
    id: 8,
    airline: 'Lufthansa',
    flightNumber: 'LH456',
    departureAirport: {
      code: 'FRA',
      name: 'Frankfurt Airport',
      city: 'Frankfurt',
    },
    arrivalAirport: {
      code: 'JFK',
      name: 'John F. Kennedy International Airport',
      city: 'New York',
    },
    departureTime: '2024-02-07T08:00:00',
    arrivalTime: '2024-02-07T12:00:00',
    duration: '8 hours',
    price: {
      economy: { adult: 700, child: 550, infant: 200, student: 630 },
      business: { adult: 1500, child: 1200, infant: 400, student: 1350 },
    },
  },
  {
    id: 9,
    airline: 'Air France',
    flightNumber: 'AF123',
    departureAirport: {
      code: 'CDG',
      name: 'Charles de Gaulle Airport',
      city: 'Paris',
    },
    arrivalAirport: {
      code: 'JFK',
      name: 'John F. Kennedy International Airport',
      city: 'New York',
    },
    departureTime: '2024-02-08T14:00:00',
    arrivalTime: '2024-02-08T17:00:00',
    duration: '8 hours',
    price: {
      economy: { adult: 750, child: 600, infant: 150, student: 680 },
      business: { adult: 1600, child: 1300, infant: 350, student: 1440 },
    },
  },
  {
    id: 10,
    airline: 'Singapore Airlines',
    flightNumber: 'SQ456',
    departureAirport: {
      code: 'SIN',
      name: 'Singapore Changi Airport',
      city: 'Singapore',
    },
    arrivalAirport: {
      code: 'LHR',
      name: 'London Heathrow Airport',
      city: 'London',
    },
    departureTime: '2024-02-09T16:00:00',
    arrivalTime: '2024-02-09T20:00:00',
    duration: '14 hours',
    price: {
      economy: { adult: 900, child: 700, infant: 200, student: 810 },
      business: { adult: 2000, child: 1600, infant: 400, student: 1800 },
    },
  },
  {
    id: 11,
    airline: 'Cathay Pacific',
    flightNumber: 'CX789',
    departureAirport: {
      code: 'HKG',
      name: 'Hong Kong International Airport',
      city: 'Hong Kong',
    },
    arrivalAirport: {
      code: 'JFK',
      name: 'John F. Kennedy International Airport',
      city: 'New York',
    },
    departureTime: '2024-02-10T10:00:00',
    arrivalTime: '2024-02-10T15:00:00',
    duration: '16 hours',
    price: {
      economy: { adult: 850, child: 650, infant: 150, student: 765 },
      business: { adult: 1800, child: 1400, infant: 350, student: 1620 },
    },
  },
  {
    id: 12,
    airline: 'Qatar Airways',
    flightNumber: 'QR123',
    departureAirport: {
      code: 'DOH',
      name: 'Hamad International Airport',
      city: 'Doha',
    },
    arrivalAirport: {
      code: 'JFK',
      name: 'John F. Kennedy International Airport',
      city: 'New York',
    },
    departureTime: '2024-02-11T08:00:00',
    arrivalTime: '2024-02-11T14:00:00',
    duration: '12 hours',
    price: {
      economy: { adult: 900, child: 700, infant: 200, student: 810 },
      business: { adult: 2000, child: 1600, infant: 400, student: 1800 },
    },
  },
  {
    id: 13,
    airline: 'Japan Airlines',
    flightNumber: 'JL456',
    departureAirport: {
      code: 'NRT',
      name: 'Narita International Airport',
      city: 'Tokyo',
    },
    arrivalAirport: {
      code: 'LAX',
      name: 'Los Angeles International Airport',
      city: 'Los Angeles',
    },
    departureTime: '2024-02-12T11:00:00',
    arrivalTime: '2024-02-12T07:00:00',
    duration: '10 hours',
    price: {
      economy: { adult: 950, child: 750, infant: 250, student: 855 },
      business: { adult: 2200, child: 1800, infant: 500, student: 1980 },
    },
  },
  {
    id: 14,
    airline: 'Air Canada',
    flightNumber: 'AC789',
    departureAirport: {
      code: 'YYZ',
      name: 'Toronto Pearson International Airport',
      city: 'Toronto',
    },
    arrivalAirport: {
      code: 'LGA',
      name: 'LaGuardia Airport',
      city: 'New York',
    },
    departureTime: '2024-02-13T09:00:00',
    arrivalTime: '2024-02-13T11:00:00',
    duration: '2 hours',
    price: {
      economy: { adult: 300, child: 250, infant: 50, student: 270 },
      business: { adult: 600, child: 500, infant: 100, student: 540 },
    },
  },
  {
    id: 15,
    airline: 'Qantas Airways',
    flightNumber: 'QF123',
    departureAirport: {
      code: 'MEL',
      name: 'Melbourne Airport',
      city: 'Melbourne',
    },
    arrivalAirport: {
      code: 'SFO',
      name: 'San Francisco International Airport',
      city: 'San Francisco',
    },
    departureTime: '2024-02-14T08:00:00',
    arrivalTime: '2024-02-14T14:00:00',
    duration: '14 hours',
    price: {
      economy: { adult: 850, child: 650, infant: 200, student: 765 },
      business: { adult: 1800, child: 1400, infant: 400, student: 1620 },
    },
  },
  {
    id: 16,
    airline: 'Lufthansa',
    flightNumber: 'LH789',
    departureAirport: {
      code: 'MUC',
      name: 'Munich Airport',
      city: 'Munich',
    },
    arrivalAirport: {
      code: 'ORD',
      name: "Chicago O'Hare International Airport",
      city: 'Chicago',
    },
    departureTime: '2024-02-15T12:00:00',
    arrivalTime: '2024-02-15T15:00:00',
    duration: '9 hours',
    price: {
      economy: { adult: 700, child: 550, infant: 150, student: 630 },
      business: { adult: 1500, child: 1200, infant: 300, student: 1350 },
    },
  },
  {
    id: 17,
    airline: 'Air New Zealand',
    flightNumber: 'NZ789',
    departureAirport: {
      code: 'AKL',
      name: 'Auckland Airport',
      city: 'Auckland',
    },
    arrivalAirport: {
      code: 'LAX',
      name: 'Los Angeles International Airport',
      city: 'Los Angeles',
    },
    departureTime: '2024-02-16T13:00:00',
    arrivalTime: '2024-02-16T07:00:00',
    duration: '12 hours',
    price: {
      economy: { adult: 900, child: 700, infant: 250, student: 810 },
      business: { adult: 2000, child: 1600, infant: 500, student: 1800 },
    },
  },
  {
    id: 18,
    airline: 'Virgin Atlantic',
    flightNumber: 'VS456',
    departureAirport: {
      code: 'LHR',
      name: 'London Heathrow Airport',
      city: 'London',
    },
    arrivalAirport: {
      code: 'JFK',
      name: 'John F. Kennedy International Airport',
      city: 'New York',
    },
    departureTime: '2024-02-17T10:00:00',
    arrivalTime: '2024-02-17T14:00:00',
    duration: '8 hours',
    price: {
      economy: { adult: 750, child: 600, infant: 150, student: 680 },
      business: { adult: 1600, child: 1300, infant: 350, student: 1440 },
    },
  },
  {
    id: 19,
    airline: 'American Airlines',
    flightNumber: 'AA456',
    departureAirport: {
      code: 'LAX',
      name: 'Los Angeles International Airport',
      city: 'Los Angeles',
    },
    arrivalAirport: {
      code: 'JFK',
      name: 'John F. Kennedy International Airport',
      city: 'New York',
    },
    departureTime: '2024-02-18T14:00:00',
    arrivalTime: '2024-02-18T22:00:00',
    duration: '8 hours',
    price: {
      economy: { adult: 400, child: 300, infant: 100, student: 360 },
      business: { adult: 800, child: 600, infant: 200, student: 720 },
    },
  },
  {
    id: 20,
    airline: 'Delta Air Lines',
    flightNumber: 'DL789',
    departureAirport: {
      code: 'JFK',
      name: 'John F. Kennedy International Airport',
      city: 'New York',
    },
    arrivalAirport: {
      code: 'LAX',
      name: 'Los Angeles International Airport',
      city: 'Los Angeles',
    },
    departureTime: '2024-02-19T10:00:00',
    arrivalTime: '2024-02-19T18:00:00',
    duration: '8 hours',
    price: {
      economy: { adult: 400, child: 300, infant: 100, student: 360 },
      business: { adult: 800, child: 600, infant: 200, student: 720 },
    },
  },
  {
    id: 21,
    airline: 'United Airlines',
    flightNumber: 'UA789',
    departureAirport: {
      code: 'LAX',
      name: 'Los Angeles International Airport',
      city: 'Los Angeles',
    },
    arrivalAirport: {
      code: 'JFK',
      name: 'John F. Kennedy International Airport',
      city: 'New York',
    },
    departureTime: '2024-02-20T08:00:00',
    arrivalTime: '2024-02-20T16:00:00',
    duration: '8 hours',
    price: {
      economy: { adult: 420, child: 320, infant: 110, student: 380 },
      business: { adult: 840, child: 640, infant: 220, student: 760 },
    },
  },
  {
    id: 22,
    airline: 'JetBlue Airways',
    flightNumber: 'B6789',
    departureAirport: {
      code: 'JFK',
      name: 'John F. Kennedy International Airport',
      city: 'New York',
    },
    arrivalAirport: {
      code: 'LAX',
      name: 'Los Angeles International Airport',
      city: 'Los Angeles',
    },
    departureTime: '2024-02-21T12:00:00',
    arrivalTime: '2024-02-21T20:00:00',
    duration: '8 hours',
    price: {
      economy: { adult: 420, child: 320, infant: 110, student: 380 },
      business: { adult: 840, child: 640, infant: 220, student: 760 },
    },
  },
  {
    id: 23,
    airline: 'Turkish Airlines',
    flightNumber: 'TK789',
    departureAirport: {
      code: 'IST',
      name: 'Istanbul Airport',
      city: 'Istanbul',
    },
    arrivalAirport: {
      code: 'LAX',
      name: 'Los Angeles International Airport',
      city: 'Los Angeles',
    },
    departureTime: '2024-02-22T09:00:00',
    arrivalTime: '2024-02-22T15:00:00',
    duration: '13 hours',
    price: {
      economy: { adult: 850, child: 650, infant: 200, student: 765 },
      business: { adult: 1800, child: 1400, infant: 400, student: 1620 },
    },
  },
  {
    id: 24,
    airline: 'Delta Air Lines',
    flightNumber: 'DL456',
    departureAirport: {
      code: 'LAX',
      name: 'Los Angeles International Airport',
      city: 'Los Angeles',
    },
    arrivalAirport: {
      code: 'IST',
      name: 'Istanbul Airport',
      city: 'Istanbul',
    },
    departureTime: '2024-02-23T17:00:00',
    arrivalTime: '2024-02-24T11:00:00',
    duration: '13 hours',
    price: {
      economy: { adult: 850, child: 650, infant: 200, student: 765 },
      business: { adult: 1800, child: 1400, infant: 400, student: 1620 },
    },
  },
  {
    id: 25,
    airline: 'Turkish Airlines',
    flightNumber: 'TK123',
    departureAirport: {
      code: 'IST',
      name: 'Istanbul Airport',
      city: 'Istanbul',
    },
    arrivalAirport: {
      code: 'LAX',
      name: 'Los Angeles International Airport',
      city: 'Los Angeles',
    },
    departureTime: '2024-02-25T10:00:00',
    arrivalTime: '2024-02-25T16:00:00',
    duration: '13 hours',
    price: {
      economy: { adult: 900, child: 700, infant: 200, student: 810 },
      business: { adult: 2000, child: 1600, infant: 400, student: 1800 },
    },
  },
  {
    id: 26,
    airline: 'Turkish Airlines',
    flightNumber: 'TK456',
    departureAirport: {
      code: 'IST',
      name: 'Istanbul Airport',
      city: 'Istanbul',
    },
    arrivalAirport: {
      code: 'LAX',
      name: 'Los Angeles International Airport',
      city: 'Los Angeles',
    },
    departureTime: '2024-02-26T12:00:00',
    arrivalTime: '2024-02-26T18:00:00',
    duration: '13 hours',
    price: {
      economy: { adult: 950, child: 750, infant: 250, student: 855 },
      business: { adult: 2200, child: 1800, infant: 500, student: 1980 },
    },
  },
  {
    id: 27,
    airline: 'Turkish Airlines',
    flightNumber: 'TK789',
    departureAirport: {
      code: 'IST',
      name: 'Istanbul Airport',
      city: 'Istanbul',
    },
    arrivalAirport: {
      code: 'CDG',
      name: 'Charles de Gaulle Airport',
      city: 'Paris',
    },
    departureTime: '2024-02-27T09:00:00',
    arrivalTime: '2024-02-27T12:00:00',
    duration: '4 hours',
    price: {
      economy: { adult: 500, child: 400, infant: 100, student: 450 },
      business: { adult: 1000, child: 800, infant: 200, student: 900 },
    },
  },
  {
    id: 28,
    airline: 'Turkish Airlines',
    flightNumber: 'TK456',
    departureAirport: {
      code: 'LHR',
      name: 'London Heathrow Airport',
      city: 'London',
    },
    arrivalAirport: {
      code: 'IST',
      name: 'Istanbul Airport',
      city: 'Istanbul',
    },
    departureTime: '2024-02-28T14:00:00',
    arrivalTime: '2024-02-28T18:00:00',
    duration: '4 hours',
    price: {
      economy: { adult: 600, child: 500, infant: 150, student: 540 },
      business: { adult: 1200, child: 1000, infant: 300, student: 1080 },
    },
  },
  {
    id: 29,
    airline: 'Turkish Airlines',
    flightNumber: 'TK789',
    departureAirport: {
      code: 'IST',
      name: 'Istanbul Airport',
      city: 'Istanbul',
    },
    arrivalAirport: {
      code: 'DXB',
      name: 'Dubai International Airport',
      city: 'Dubai',
    },
    departureTime: '2024-02-29T09:00:00',
    arrivalTime: '2024-02-29T15:00:00',
    duration: '5 hours',
    price: {
      economy: { adult: 700, child: 550, infant: 200, student: 630 },
      business: { adult: 1400, child: 1100, infant: 400, student: 1260 },
    },
  },
  {
    id: 30,
    airline: 'Turkish Airlines',
    flightNumber: 'TK456',
    departureAirport: {
      code: 'FRA',
      name: 'Frankfurt Airport',
      city: 'Frankfurt',
    },
    arrivalAirport: {
      code: 'IST',
      name: 'Istanbul Airport',
      city: 'Istanbul',
    },
    departureTime: '2024-03-01T12:00:00',
    arrivalTime: '2024-03-01T15:00:00',
    duration: '3 hours',
    price: {
      economy: { adult: 400, child: 300, infant: 100, student: 360 },
      business: { adult: 800, child: 600, infant: 200, student: 720 },
    },
  },
];
