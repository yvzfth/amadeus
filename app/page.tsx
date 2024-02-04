'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import FlightForm from '@/components/FlightForm';
import { Metric, Title } from '@tremor/react';
import { NextUIProvider } from '@nextui-org/react';

const Home = () => {
  return (
    <NextUIProvider>
      <Navbar />
      <main className='flex flex-col items-center justify-center h-screen bg-center bg-cover bg-hero-pattern'>
        <section>
          <Title className='text-slate-200'>HELLO</Title>
          <Metric className='text-slate-200'>
            Where do you want to explore?
          </Metric>
        </section>
        <section className='w-20 h-[5.5rem]'></section>
        <div className='flex items-center justify-center w-full '>
          <FlightForm />
        </div>
      </main>
    </NextUIProvider>
  );
};

export default Home;
