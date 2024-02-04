import { Tab, Tabs } from '@nextui-org/react';
import { Button, SearchSelectItem, SearchSelect } from '@tremor/react';
import { FLIGHT_OPTIONS, FlightOptionsEnum } from '@/utils/index';
import DateRangePicker from '@/components/DateRangePicker';
import CabinPassengerSelection from '@/components/PassengerSelect';
import { IoAirplane } from 'react-icons/io5';
import { useState } from 'react';
import { HiOutlineArrowPathRoundedSquare } from 'react-icons/hi2';
import { LuMilestone } from 'react-icons/lu';
import DatePickerComponent from './DatePicker';

// Define a custom component for the flight booking form
export default function FlightForm() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
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
                className='w-40'
                placeholder='From'
              >
                <SearchSelectItem value='IST'>Istanbul</SearchSelectItem>
              </SearchSelect>
              <SearchSelect
                name='to'
                value={to}
                onValueChange={setTo}
                className='w-40'
                placeholder='To'
              >
                <SearchSelectItem value='WAW'>Varsov</SearchSelectItem>
              </SearchSelect>
              {option === FlightOptionsEnum.RoundTrip ? (
                <DateRangePicker />
              ) : (
                <DatePickerComponent />
              )}
              <CabinPassengerSelection />
              <Button size='sm' className='w-40 font-bold' icon={IoAirplane}>
                Search flight
              </Button>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
