import { DatePicker } from '@tremor/react';
import { addDays } from 'date-fns';
import React from 'react';

export default function DatePickerComponent() {
  const [value, setValue] = React.useState<Date | undefined>(new Date());
  return (
    <DatePicker
      placeholder='Pick a date'
      className='max-w-md mx-auto min-w-48 '
      value={value}
      minDate={new Date()}
      maxDate={addDays(new Date(), 360)}
      onValueChange={setValue}
    />
  );
}
