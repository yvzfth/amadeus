// Import Next.js, Tailwind CSS, and tremor/react modules
import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {
  Button,
  Icon,
  List,
  ListItem,
  NumberInput,
  Title,
} from '@tremor/react';
import { IoInformationCircleOutline, IoPeople } from 'react-icons/io5';
import FlightRadioGroup from './FlightRadioGroup';
import { Tooltip } from '@nextui-org/react';

// Define some constants for the component content
const CABIN_CLASSES = [
  { label: 'Economy Class', value: 'economy' },
  { label: 'Business Class', value: 'business' },
];
interface IPassengerTypes {
  [key: string]: string | number | undefined;
  label: string;
  value:
    | PassengerEnum.adult
    | PassengerEnum.child
    | PassengerEnum.infant
    | PassengerEnum.student;
  min: number;
  max: number;
  age: string;
  tooltip: string;
}
enum PassengerEnum {
  adult = 'adult',
  child = 'child',
  infant = 'infant',
  student = 'student',
}
const PASSENGER_TYPES: IPassengerTypes[] = [
  {
    label: 'Adult',
    value: PassengerEnum.adult,
    min: 0,
    max: 9,
    age: '12+',
    tooltip: 'Passengers over the age of 12 can travel as adult passengers.',
  },
  {
    label: 'Child',
    value: PassengerEnum.child,
    min: 0,
    max: 9,
    age: '2 - 11',
    tooltip:
      'Passengers who have not reached their 12th birthday by the date of the last flight are considered child passengers. Children 7 years old and older can travel alone with the consent of their parents.',
  },
  {
    label: 'Infant',
    value: PassengerEnum.infant,
    min: 0,
    max: 9,
    age: 'Under 2 years old',
    tooltip:
      'Passengers 7 days old up to those who have not reached their 2nd birthday travel with infant status. ',
  },
  {
    label: 'Student',
    value: PassengerEnum.student,
    min: 0,
    max: 9,
    age: '12 - 34',
    tooltip:
      'To benefit from the student discount, students must be Miles&Smiles members and create a student profile.',
  },
];

// Define a custom component for the cabin and passenger selection
const CabinPassengerSelection = () => {
  // Define the state variables for the component
  const [cabinClass, setCabinClass] = useState('economy');
  const [passengers, setPassengers] = useState({
    adult: 1,
    child: 0,
    infant: 0,
    student: 0,
  });

  // Define a function to handle the change of cabin class
  const handleCabinClassChange = (value: any) => {
    setCabinClass(value);
  };

  const handlePassengerChange = (
    type: keyof typeof passengers,
    value: number
  ) => {
    setPassengers({
      ...passengers,
      [type]:
        value === undefined ||
        // value === '' ||
        value === Number.NaN ||
        value === null
          ? 0
          : value > 9
          ? 9
          : value,
    });
  };

  // Define a function to get the total number of passengers
  const getTotalPassengers = () => {
    return Object.values(passengers).reduce((a, b) => a + b, 0);
  };

  // Define a function to get the passenger summary
  const getPassengerSummary = () => {
    return Object.entries(passengers)
      .filter(([type, count]) => count > 0)
      .map(([type, count]) => `${count} ${type}`)
      .join(', ');
  };
  // Return the JSX code for rendering the component
  return (
    <PopupState variant='popover' popupId='demo-popup-menu'>
      {(popupState) => (
        <React.Fragment>
          <Button
            // variant='solid'
            icon={IoPeople}
            color='slate'
            content='Passengers'
            className='bg-white text-[rgb(55,65,81)] w-48'
            {...bindTrigger(popupState)}
          >
            {getTotalPassengers()} Passengers
          </Button>
          <Menu
            {...bindMenu(popupState)}
            sx={{ ['&>div']: { borderRadius: '1rem' } }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Title className='p-4 py-2'>Cabin and passenger selection</Title>
            <div className='px-4'>
              <FlightRadioGroup />
            </div>
            <List className='p-4 py-2'>
              {PASSENGER_TYPES.map((option) => (
                <ListItem key={option.value}>
                  <div>
                    <div className='flex items-center'>
                      <span className='text-md font-bold'>{option.label}</span>
                      <Tooltip
                        color='primary'
                        content={option.tooltip}
                        className='max-w-[300px]'
                      >
                        <Icon
                          color='gray'
                          size='sm'
                          icon={IoInformationCircleOutline}
                        />
                      </Tooltip>
                    </div>
                    <span className='text-xs'>{option.age}</span>
                  </div>
                  <span>
                    <NumberInput
                      value={
                        passengers[option.value as keyof typeof passengers]
                      }
                      min={option.min}
                      max={option.max}
                      onChange={(value) =>
                        handlePassengerChange(
                          option?.value!,
                          Number(value.target.value)
                        )
                      }
                    />
                  </span>
                  {/* <div className='flex w-full gap-6 items-center justify-between z-10'>
                  </div> */}
                </ListItem>
              ))}
            </List>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default CabinPassengerSelection;
