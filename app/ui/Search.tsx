'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Search() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const [search, updateSearch] = useState('');

  const updateFIlter = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    router.replace(`${pathName}?${params.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const searchParam = params.get('search');

    if (searchParam) {
      updateSearch(searchParam);
    } else {
      updateSearch('');
    }
  }, []);
  return (
    <>
      <div className="search">
        <div className="search-wrapper">
          <input
            className="search-wrapper_input"
            type="text"
            value={search}
            onChange={(event) => updateSearch(event.target.value)}
          />
        </div>
        <div className="search-btn">
          <button onClick={() => updateFIlter(search)}></button>
        </div>
      </div>
    </>
  );
}
