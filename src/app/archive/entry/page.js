import NextEntry from '@/components/NextEntry';
import PrevEntry from '@/components/PrevEntry';
import RefData from '@/components/RefData';
import { addLeadingZeros, formatTimestamp } from '@/lib/utils';
import { redirect } from 'next/navigation';
import React from 'react';
import RESOURCE_URL from 'src/constants/resourcesUrl';
import createClient from 'src/lib/supabase-server';

import ADMINS from '../../../constants/admins';

export default async function Entry(props) {
  let databaseValue = addLeadingZeros(props.params.id);
  const supabase = createClient();

  let string = '';
  let resource = '';

  let ocr;
  let translation;
  let webMatches;
  let labels;
  let description;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!(user && ADMINS.includes(user.email))) {
    redirect('/');
  } else if (user && ADMINS.includes(user.email)) {
    console.log('user is admin: ', user.email);
  }

  const { data, error } = await supabase
    .from('digital_archive')
    .select()
    .eq('id', databaseValue)
    .limit(1);

  if (error) {
    string = 'error: ' + JSON.stringify(error);
    return <div>entry not found</div>;
  } else if (data.length === 0) {
    string = 'entry not found';
    return (
      <div>
        <PrevEntry entryId={props.params.id} />
        <NextEntry entryId={props.params.id} />
        entry not found
      </div>
    );
  } else {
    string = JSON.stringify(data, null, 4);
    resource = data[0].resource_endpoint;
  }

  const parseData = (dataObject) => {
    if (dataObject[0].labels_generated) {
      labels = dataObject[0].labels_generated;
      // console.log('LABEL ' + labels);
    }
    if (dataObject[0].ocr_generated) {
      ocr = dataObject[0].ocr_generated.text;
      // console.log('OCR ' + ocr);
    }
    if (dataObject[0].description_generated) {
      description = dataObject[0].description_generated.description;
      // console.log('DESC ' + description);
    }
    if (dataObject[0].translation_generated) {
      translation = dataObject[0].translation_generated.text;
      // console.log('TRANS ' + translation);
    }
    if (dataObject[0].web_matches_generated) {
      webMatches = dataObject[0].web_matches_generated;
      // console.log('WEB ' + webMatches);
    }
  };

  if (data.length !== 0) parseData(data);

  let media_tag;

  if (data[0]?.resource_type === 'video') {
    media_tag = (
      <div>
        <video controls>
          <source src={RESOURCE_URL + resource}></source>
        </video>
      </div>
    );
  } else if (data[0]?.resource_type === 'image') {
    media_tag = (
      <div>
        <img src={RESOURCE_URL + resource} width="500px"></img>
      </div>
    );
  }

  return (
    <div>
      <PrevEntry entryId={props.params.id} />
      <NextEntry entryId={props.params.id} />
      <div className="pt-8">
        {data[0]?.description_generated?.description
          ? data[0].description_generated.description
          : 'Entry ' + data[0].id}
      </div>
      <div className="pt-8">{formatTimestamp(data[0].date_time_original)}</div>
      <div className="grid grid-cols-3 pt-10">
        <div className="col-span-1 m-10">{media_tag}</div>
        {labels && <RefData dataType="labels_generated" data={labels} />}
        {ocr && <RefData dataType="ocr_generated" data={ocr} />}
        {webMatches && <RefData dataType="web_matches_generated" data={webMatches} />}
        {translation && <RefData dataType="translation_generated" data={translation} />}
        <div>{string}</div>
      </div>
    </div>
  );
}
