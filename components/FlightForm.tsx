import { Tab, Tabs } from '@nextui-org/react';
import { Button, SearchSelectItem, SearchSelect } from '@tremor/react';
import { FLIGHT_OPTIONS, FlightOptionsEnum } from '@/utils/index';
import DateRangePicker from '@/components/DateRangePicker';
import CabinPassengerSelection from '@/components/PassengerSelect';
import { IoAirplane } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { HiOutlineArrowPathRoundedSquare } from 'react-icons/hi2';
import { LuMilestone } from 'react-icons/lu';
import DatePickerComponent from './DatePicker';
import axios from 'axios';
import { useRouter } from 'next/navigation';

// Define a custom component for the flight booking form
export default function FlightForm() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureAirports, setDepartureAirports] = useState<Airport[]>([]);
  const [arrivalAirports, setArrivalAirports] = useState<Airport[]>([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IFlight[]>('/api/flights');

        const uniqueDepartureAirports = Array.from(
          new Map(
            response.data.map((flight) => [
              flight.departureAirport.code,
              flight.departureAirport,
            ])
          ).values()
        );

        const uniqueArrivalAirports = Array.from(
          new Map(
            response.data.map((flight) => [
              flight.arrivalAirport.code,
              flight.arrivalAirport,
            ])
          ).values()
        );

        setDepartureAirports(uniqueDepartureAirports);
        setArrivalAirports(uniqueArrivalAirports);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // Function to handle flight search
  const handleSearch = async () => {
    router.push('/search?from=' + from + '&to=' + to);
  };
  return (
    <div>
      <Tabs
        aria-label='Options'
        color='default'
        variant='solid'
        className='[&_div[data-slot="tabList"]]:!backdrop-blur-lg [&_div[data-slot="tabList"]]:!backdrop-brightness-200 
        [&_div[data-slot="tabList"]]:!backdrop-contrast-50 [&_div[data-slot="tabList"]]:bg-transparent
        [&_div[data-slot="tabList"]]:font-bold  [&_div[data-slot="tabContent"]]:text-white'
      >
        {FLIGHT_OPTIONS.map((option) => (
          <Tab
            key={option}
            title={
              <div className='flex items-center space-x-2'>
                {option === FlightOptionsEnum.RoundTrip ? (
                  <HiOutlineArrowPathRoundedSquare />
                ) : (
                  <LuMilestone />
                )}
                <span>{option}</span>
              </div>
            }
          >
            <div
              className='flex flex-col lg:flex-row items-center justify-center gap-4 p-4 rounded-xl
            backdrop-blur-lg backdrop-brightness-200 backdrop-contrast-50'
            >
              <SearchSelect
                name='from'
                value={from}
                onValueChange={setFrom}
                className='w-48'
                placeholder='From'
              >
                {departureAirports?.map((airport) => (
                  <SearchSelectItem key={airport?.code} value={airport?.code}>
                    {airport?.city} ({airport?.code})
                  </SearchSelectItem>
                ))}
              </SearchSelect>
              <SearchSelect
                name='to'
                value={to}
                onValueChange={setTo}
                className='w-48'
                placeholder='To'
              >
                {arrivalAirports?.map((airport) => (
                  <SearchSelectItem key={airport?.code} value={airport?.code}>
                    {airport?.city} ({airport?.code})
                  </SearchSelectItem>
                ))}
              </SearchSelect>
              {option === FlightOptionsEnum.RoundTrip ? (
                <div className='w-48'>
                  <DateRangePicker />
                </div>
              ) : (
                <div className='w-48'>
                  <DatePickerComponent />
                </div>
              )}
              <CabinPassengerSelection />
              <Button
                size='sm'
                className='w-48 font-bold'
                icon={IoAirplane}
                onClick={handleSearch}
              >
                Search flight
              </Button>
            </div>
          </Tab>
        ))}
      </Tabs>
      {/* Search result list */}
    </div>
  );
}
