'use client';

import { useAppContext } from '@/context';

const ContainerColorido = () => {
  const { color } = useAppContext();

  return (
    <>
      <section style={{ backgroundColor: color }} className='min-h-screen' />
      <style>
        {`
          body {
            --sb-track-color: ${color};
            --sb-thumb-color: ${color};
            --sb-size: 8px;
          }

          body::-webkit-scrollbar {
            width: var(--sb-size);
          }

          body::-webkit-scrollbar-track {
            background: var(--sb-track-color);
            border-radius: 12px;
          }

          body::-webkit-scrollbar-thumb {
            background: var(--sb-thumb-color);
            border-radius: 0px;
          }

          @supports not selector(::-webkit-scrollbar) {
            body {
              scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
            }
          }
        `}
      </style>
    </>
  );
};

export default ContainerColorido;
