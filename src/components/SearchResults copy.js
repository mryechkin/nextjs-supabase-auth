import { getSearchPageBounds } from '@/lib/utils';
import React from 'react';
import { Suspense } from 'react';
import createClient from 'src/lib/supabase-server';

import Loading from './Loading';
import PaginationTest from './PaginationTest';
import SearchResult from './SearchResult';

export default async function SearchResults(props) {
  let currentPage = props.page ? props.page : 1;
  const { lowerBound, upperBound } = getSearchPageBounds(currentPage);

  let supabase = createClient();

  let formatedData;

  const { count, data, error } = await supabase
    .from('digital_archive')
    .select('*', { count: 'exact' })
    .order('id', { ascending: false })
    .range(lowerBound, upperBound);

  const pageCount = Math.floor(count / 16);

  if (data) {
    formatedData = data.map(
      (entry) => (
        <SearchResult
          key={entry.id}
          resource_endpoint={entry.resource_endpoint}
          id={entry.id}
          description_generated={entry.description_generated}
          resource_type={entry.resource_type}
        />
      )
      // <img width='300px' src={RESOURCE_URL + entry.resource_endpoint}/>
      // <a href={entry.id}>{entry.description_generated}</a>
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="border-2 border-black p-15 pb-5">
        <div className="h-20px grid grid-cols-4">{formatedData}</div>
        <div className="flex items-center justify-center mt-5">
          <PaginationTest currentPage={Number(currentPage)} pages={Number(pageCount)} />
        </div>
      </div>
    </Suspense>
  );
}
