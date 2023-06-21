import { formatTimestamp } from '@/lib/utils';
import PropTypes from 'prop-types';
import React from 'react';
import RESOURCE_URL from 'src/constants/resourcesUrl';

SearchResult.propTypes = {
  id: PropTypes.number,
  resource_type: PropTypes.string,
  description_generated: PropTypes.string,
  resource_endpoint: PropTypes.string,
  timestamp: PropTypes.string,
};

export default function SearchResult(props) {
  let link = 'archive/' + props.id;

  if (props.resource_type === 'image') {
    return (
      <div className="m-5">
        <a href={link}>
          <img
            width="300px"
            className="p-2"
            src={RESOURCE_URL + props.resource_endpoint}
            href={link}
          />
        </a>
        <a className="mt-5 font-bold hover:underline" href={link}>
          {props.description_generated.description}
        </a>
        <div>{formatTimestamp(props.timestamp)}</div>
      </div>
    );
  }
}
