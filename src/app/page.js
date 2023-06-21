import SignIn from '@/components/Auth/SignIn';
import React from 'react';

export default async function Home(props) {
  return (
    <div className="card bg-yellow-400 drop-shadow-none">
      <SignIn />
      Main page !
    </div>
  );
}
