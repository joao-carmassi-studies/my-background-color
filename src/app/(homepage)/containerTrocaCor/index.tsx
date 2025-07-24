'use client';

import { ColorPicker } from '@/components/ui/color-picker';
import { H1 } from '@/components/ui/h1';
import { P } from '@/components/ui/p';
import { useAppContext } from '@/context';

const ContainerTrocaCor = () => {
  const { color, setColor } = useAppContext();

  return (
    <section className='p-6 md:p-12 mx-auto max-w-7xl flex flex-col items-center justify-center gap-6'>
      <H1 className='text-center'>My background color</H1>
      <P className='text-center'>
        Enter a valid hex color code (like #464168) in the input box and press
        Enter. The background will change to that color. 🎨
      </P>
      <ColorPicker
        className='cursor-pointer'
        value={color}
        onChange={(value) => setColor(value as string)}
      />
    </section>
  );
};

export default ContainerTrocaCor;
