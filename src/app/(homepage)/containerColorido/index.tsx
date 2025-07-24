'use client';

import { useAppContext } from '@/context';

const ContainerColorido = () => {
  const { color } = useAppContext();

  return (
    <section style={{ backgroundColor: color }} className='min-h-screen' />
  );
};

export default ContainerColorido;
