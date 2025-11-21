'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const updateFIlter = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('category', value);
    } else {
      params.delete('category');
    }

    router.replace(`${pathName}?${params.toString()}`);
  };

  return (
    <>
      <div className="catalog-button">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className="catalog-button_burger"></span>
          <span className="catalog-button_text">Каталог</span>
        </button>
        <div className="catalog" style={{ display: isOpen ? 'block' : '' }}>
          <ul className="catalog-list">
            <li onClick={() => updateFIlter('Игровая приставка')}>
              Игровая приставка
            </li>
            <li onClick={() => updateFIlter('Периферия для ПК')}>
              Периферия для ПК
            </li>
            <li onClick={() => updateFIlter('Игры и софт')}>Игры и софт</li>
          </ul>
        </div>
      </div>
    </>
  );
}
