import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Fetch flight data from your data source (e.g., an external API or database)
    const response = await axios.get(
      process.env.DEPLOYMENT_URL + '/api/flights'
    );
    const data: IFlight[] = await response.data;

    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: 'No flights data found' },
        { status: 404 }
      );
    }

    const from = request.nextUrl.searchParams.get('from');
    const to = request.nextUrl.searchParams.get('to');

    if (!from || !to) {
      return NextResponse.json(
        { error: 'Missing search parameters' },
        { status: 400 }
      );
    }

    // Filter the flight data based on the "from" and "to" parameters
    const searchResults = data.filter(
      (flight) =>
        flight.departureAirport.code === from &&
        flight.arrivalAirport.code === to
    );

    if (searchResults.length === 0) {
      return NextResponse.json(
        { error: 'No matching flights found' },
        { status: 404 }
      );
    }

    // Return the search results
    return NextResponse.json(searchResults, { status: 200 });
  } catch (error) {
    console.error('Error searching flights:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
