'use client';
import { NextPage } from 'next';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { List, ListItem } from '@tremor/react';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import Navbar from '@/components/Navbar';

const SearchPage: NextPage = () => {
  const params = useSearchParams();
  const from = params.get('from');
  const to = params.get('to');
  const [searchResults, setSearchResults] = useState<IFlight[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (from && to) {
          const response = await axios.get<IFlight[]>('/api/search', {
            params: { from, to },
          });
          setSearchResults(response.data);
          console.log(searchResults);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchData();
  }, [from, to]);

  return (
    <div>
      <Navbar />
      {searchResults && (
        <Table className='container mx-auto p-8'>
          <TableHeader>
            <TableColumn>Airline</TableColumn>
            <TableColumn>Flight Number</TableColumn>
            <TableColumn>Departure Airport</TableColumn>
            <TableColumn>Arrival Airport</TableColumn>
            <TableColumn>Departure Time</TableColumn>
            <TableColumn>Arrival Time</TableColumn>
            <TableColumn>Duration</TableColumn>
          </TableHeader>
          <TableBody>
            {searchResults?.map((result) => (
              <TableRow key={result.id}>
                <TableCell>{result.airline}</TableCell>
                <TableCell>{result.flightNumber}</TableCell>
                <TableCell>{result.departureAirport.city}</TableCell>
                <TableCell>{result.arrivalAirport.city}</TableCell>
                <TableCell>
                  {new Date(result.departureTime).toLocaleDateString() +
                    ' ' +
                    new Date(result.departureTime).toLocaleTimeString()}
                </TableCell>
                <TableCell>{result.arrivalTime}</TableCell>
                <TableCell>{result.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};
export default SearchPage;
