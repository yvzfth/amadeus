'use client';

import { DateRangePicker, DateRangePickerValue } from '@tremor/react';
// import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';

import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState<DateRangePickerValue>({
    from: new Date(),
    to: new Date(),
  });
  return (
    <DateRangePicker
      placeholder='Pick a date range'
      className='max-w-md mx-auto'
      value={value}
      minDate={new Date()}
      maxDate={addDays(new Date(), 360)}
      onValueChange={setValue}
      enableSelect={false} // enableSelect={false} to disable the select feature
    ></DateRangePicker>
  );
}
