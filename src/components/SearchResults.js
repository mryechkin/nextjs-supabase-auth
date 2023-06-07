import createClient from 'src/lib/supabase-server';
import SearchResult from "./SearchResult";
import MoreResultsButton from './MoreResultsButton';
// import { useState } from 'react';


export default async function SearchResults(props) {

  // const [resultsCount, setResultsCount] = useState(20); 

  let x = 20;

  let supabase = createClient();

  let formatedData;

  const { data, error } = await supabase
  .from('digital_archive')
  .select()
  .order('id', { ascending: false})
  .limit(x);

  

  console.log('DATA', data);

  if (data) {
    console.log('data', data[0].resource_url)
    formatedData = data.map(entry => 
        <SearchResult resource_endpoint={entry.resource_endpoint} id={entry.id} description_generated={entry.description_generated} resource_type={entry.resource_type}/> 
        // <img width='300px' src={RESOURCE_URL + entry.resource_endpoint}/>
        // <a href={entry.id}>{entry.description_generated}</a>
        
  );
  }

  console.log('FORMATED DATA'. formatedData);


  return (
    <div>
    <div className='grid grid-cols-4 p-10 border-2 border-black h-20px'>
      {formatedData}
    </div>
    {/* <MoreResultsButton resultsCount={resultsCount} setResultsCount={setResultsCount} /> */}
    {/* <button onClick={() => {x = x + 20}}>more results</button> */}
    </div>

  );
}
