'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function NextPage(props) {
  const router = useRouter();

  let page = props.page;
  let nextPage = Number(props.page) + 1;

  return (
    <button
      onClick={() => router.push(`/?page=${nextPage}`)}
      className="m-2 border-2 border-black border-black p-1 hover:bg-sky-500"
    >
      NEXT ▶
    </button>
  );
}
