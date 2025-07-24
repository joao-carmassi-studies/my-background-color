'use client';

import { ColorPicker } from '@/components/ui/color-picker';
import { useAppContext } from '@/context';

export default function Home() {
  const { color, setColor } = useAppContext();

  return (
    <main>
      <section style={{ backgroundColor: color }} className='min-h-screen' />
      <section className='min-h-screen grid place-items-center'>
        <ColorPicker
          value={color}
          onChange={(value) => setColor(value as string)}
        />
      </section>
    </main>
  );
}
