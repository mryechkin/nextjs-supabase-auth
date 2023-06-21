import SearchResults from '@/components/SearchResults';
// import SignIn from '@/components/SignIn';
// import { checkIsOnDemandRevalidate } from 'next/dist/server/api-utils';
// import SearchResult from '@/components/SearchResult';
import React from 'react';

// import createClient from 'src/lib/supabase-server';

export default async function Home(props) {
  // let supabase = createClient();

  return (
    <div className=" grid grid-cols-5">
      <div className="sticky top-0 col-start-1 col-end-2 border-2 border-black drop-shadow-none border-y-0">
        test
      </div>
      <div className="h-90 overflow-hidden pt-5 col-start-2 col-end-6 card bg-yellow-400 drop-shadow-none overflow-scroll	">
        <SearchResults page={props.searchParams.page} tags={props.searchParams.tags} />
      </div>
    </div>
  );
}
