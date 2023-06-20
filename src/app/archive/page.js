import SearchResults from '@/components/SearchResults';
import SignIn from '@/components/SignIn';
import { checkIsOnDemandRevalidate } from 'next/dist/server/api-utils';
// import SearchResult from '@/components/SearchResult';
import React from 'react';
import createClient from 'src/lib/supabase-server';

export default async function Home(props) {
  let supabase = createClient();

  return (
    <div className="card bg-yellow-400 drop-shadow-none">
      {/* <SignIn /> */}
      <SearchResults page={props.searchParams.page} tags={props.searchParams.tags} />
    </div>
  );
}
