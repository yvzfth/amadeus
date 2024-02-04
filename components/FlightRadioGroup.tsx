import React, { useState } from 'react';
import { RadioGroup, Radio, cn } from '@nextui-org/react';

export const CustomRadio = (props: any) => {
  const { children, ...otherProps } = props;

  return (
    <div>
      <Radio
        {...otherProps}
        classNames={{
          base: cn(
            'flex m-0 bg-content1 hover:bg-content2 items-center justify-between',
            'flex-row cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent',
            'data-[selected=true]:border-primary shadow-lg'
          ),
        }}
        className={props.className}
      >
        {children}
      </Radio>
    </div>
  );
};

export default function FlightRadioGroup() {
  const [selectedValue, setSelectedValue] = useState('economy');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value);
    setSelectedValue(value);
  };

  return (
    <RadioGroup
      orientation='horizontal'
      onChange={handleChange}
      defaultValue='economy'
      defaultChecked
    >
      <CustomRadio
        value='economy'
        className={
          selectedValue === 'economy'
            ? 'data-[selected=true]'
            : 'data-[selected=false]'
        }
      >
        Economy Class
      </CustomRadio>
      <CustomRadio
        value='business'
        className={
          selectedValue === 'business'
            ? 'data-[selected=true]'
            : 'data-[selected=false]'
        }
      >
        Business Class
      </CustomRadio>
    </RadioGroup>
  );
}
