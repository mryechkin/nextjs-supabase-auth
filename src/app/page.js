import SearchResults from '@/components/SearchResults';
import SignIn from '@/components/SignIn';
// import SearchResult from '@/components/SearchResult';
import React from 'react';

export default function Home() {
  return (
    <div className="card bg-yellow-200 drop-shadow-none">
      <SignIn />
      <SearchResults />
    </div>
  );
}
