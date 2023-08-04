import React from 'react';
import KingmanSign from './KingmanSign'
import HomeInformation from './HomeInformation';
export default function Home() {
  return (
    <main className='bg-gray-800 pt-16'>
      <KingmanSign/>
      <HomeInformation/>
    </main>
  )
}
