import type { Metadata } from 'next';
import './globals.css';
import AppProvider from '@/context';

export const metadata: Metadata = {
  title: 'My background color',
  description:
    'Enter a valid hex color code (like #464168) in the input box and press Enter. The background will change to that color. 🎨',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <AppProvider>
        <body className='animate-in fade-in duration-1000 delay-100 fill-mode-both'>
          {children}
        </body>
      </AppProvider>
    </html>
  );
}
