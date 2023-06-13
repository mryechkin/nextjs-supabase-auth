'use client';

import React from 'react';

export default function PrevEntry(props) {
  let prevId = Number(props.entryId) - 1;

  let prevUrl = '' + Number(prevId);

  return (
    <a
      href={prevUrl}
      className="m-2 mb-10 border-2 border-black border-black p-1 hover:bg-sky-500"
    >
      ◀ PREV
    </a>
  );
}
