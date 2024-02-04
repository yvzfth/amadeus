interface Airport {
  code: string;
  name: string;
  city: string;
}

// interfaces.ts

interface IFlight {
  id: number;
  airline: string;
  flightNumber: string;
  departureAirport: Airport;
  arrivalAirport: Airport;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: Price;
}

interface Airport {
  code: string;
  name: string;
  city: string;
}

interface Price {
  economy: {
    adult: number;
    child: number;
    infant: number;
    student: number;
  };
  business: {
    adult: number;
    child: number;
    infant: number;
    student: number;
  };
}

interface IAirports {
  departureAirport: Airport;
  arrivalAirport: Airport;
}

// interface SearchResult {
//   id: number;
//   airline: string;
//   flightNumber: string;
//   departureAirport: string;
//   arrivalAirport: string;
//   departureTime: string;
//   arrivalTime: string;
//   duration: string;
// }
